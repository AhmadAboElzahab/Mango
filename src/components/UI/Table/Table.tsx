import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { generateEditableColumnsFromMeta } from 'core/utils/tableColumnBuilder';
import React, { useMemo, useRef } from 'react';

import {
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
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: 'index',
        header: '#',
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

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 33,
    overscan: 10,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <StyledTableWrapper ref={parentRef}>
      <StyledTable>
        <thead
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 100000000,
            backgroundColor: 'red',
          }}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledTh key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </StyledTh>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {virtualRows.map((virtualRow) => {
            const row = table.getRowModel().rows[virtualRow.index];
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <StyledTd key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTd>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
