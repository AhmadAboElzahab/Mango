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
  const totalSize = rowVirtualizer.getTotalSize();
  const paddingTop = virtualRows.length > 0 ? virtualRows[0].start : 0;
  const paddingBottom =
    virtualRows.length > 0 ? totalSize - virtualRows[virtualRows.length - 1].end : 0;

  return (
    <StyledTableWrapper ref={parentRef}>
      <StyledTable>
        <thead>
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
