import React, { useMemo } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { generateEditableColumnsFromMeta } from 'core/utils/tableColumnBuilder';
import {
  FadeTbody,
  SkeletonCell,
  SkeletonHeader,
  StyledIndexCell,
  StyledTable,
  StyledTableWrapper,
  StyledTd,
  StyledTh,
} from './Table.styles';
import { TableProps } from './Table.types';
import { PAGE_SIZE } from 'core/services/data.service';

import type { OnChangeFn, PaginationState } from '@tanstack/react-table';

const Table: React.FC<
  TableProps & {
    totalCount: number;
    pagination: PaginationState;
    setPagination: OnChangeFn<PaginationState>;
  }
> = ({ data, formFields, activeTabColumns, isLoading, totalCount, pagination, setPagination }) => {
  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: 'index',
        header: '',
        size: 36,
        minSize: 36,
        maxSize: 36,
        cell: ({ row }) => <StyledIndexCell>{row.index + 1}</StyledIndexCell>,
      },
      ...generateEditableColumnsFromMeta(formFields, activeTabColumns, () => {}),
    ],
    [formFields, activeTabColumns],
  );

  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    pageCount: Math.ceil(totalCount / PAGE_SIZE),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead style={{ position: 'sticky', top: 0, zIndex: 2 }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledTh key={header.id}>
                  {isLoading ? (
                    <SkeletonHeader />
                  ) : (
                    flexRender(header.column.columnDef.header, header.getContext())
                  )}
                </StyledTh>
              ))}
            </tr>
          ))}
        </thead>

        {isLoading ? (
          <FadeTbody $visible>
            {Array.from({ length: 10 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((_, colIndex) => (
                  <StyledTd key={colIndex}>
                    <SkeletonCell />
                  </StyledTd>
                ))}
              </tr>
            ))}
          </FadeTbody>
        ) : (
          <FadeTbody $visible>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <StyledTd key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTd>
                ))}
              </tr>
            ))}
          </FadeTbody>
        )}
      </StyledTable>

      {/* Optional: Pagination controls */}
      <div style={{ padding: '8px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </button>
      </div>
    </StyledTableWrapper>
  );
};

export default Table;
