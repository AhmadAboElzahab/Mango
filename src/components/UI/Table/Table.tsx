import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { generateEditableColumnsFromMeta } from 'core/utils/tableColumnBuilder';
import React, { useMemo } from 'react';

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

const Table: React.FC<TableProps & { totalCount: number }> = ({
  data,
  formFields,
  activeTabColumns,
  isLoading,
}) => {
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
    getCoreRowModel: getCoreRowModel(),
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
    </StyledTableWrapper>
  );
};

export default Table;
