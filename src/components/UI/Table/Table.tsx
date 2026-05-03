import type { OnChangeFn, PaginationState } from '@tanstack/react-table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { PAGE_SIZE } from 'core/services/data.service';
import { generateEditableColumnsFromMeta } from 'core/utils/tableColumnBuilder';
import React, { useMemo } from 'react';

import { TableProps } from './Table.types';

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
        size: 236,
        cell: ({ row }) => (
          <div className="flex items-center justify-center h-full min-w-9 max-w-9 p-0">
            {row.index + 1}
          </div>
        ),
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
    <div
      style={{
        height: '100%',
        minHeight: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'green',
      }}
    >
      <div className="w-full overflow-visible bg-white">
        <table className="w-full text-[13px] bg-white border-spacing-0 table-fixed">
          <thead style={{ position: 'sticky', top: 0, zIndex: 2 }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize() }}
                    className="text-left text-[rgb(29,31,37)] bg-[#f4f4f4] border-b border-b-[hsl(0,0%,82%)] border-l border-l-[hsl(202,10%,88%)] pt-px pl-2.5 font-normal h-7.75 whitespace-nowrap first:border-l-0 first:text-center nth-2:border-l-0"
                  >
                    {isLoading ? (
                      <div className="skeleton-header" />
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {isLoading ? (
            <tbody className="opacity-100 pointer-events-auto relative transition-opacity duration-400 ease-[ease]">
              {Array.from({ length: 10 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((cell) => (
                    <td
                      key={cell.id}
                      className="data-cell relative p-0 h-8 border-b border-[hsl(202,10%,88%)] border-l first:border-l-0 first:w-9 first:max-w-9 nth-2:border-l-0"
                    >
                      <div className="skeleton-cell" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody className="opacity-100 pointer-events-auto relative transition-opacity duration-400 ease-[ease]">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="data-cell relative p-0 h-8 border-b border-[hsl(202,10%,88%)] border-l first:border-l-0 first:w-9 first:max-w-9 nth-2:border-l-0"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      <div
        style={{
          padding: '8px',
          background: 'red',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexShrink: 0,
        }}
      >
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
    </div>
  );
};

export default Table;
