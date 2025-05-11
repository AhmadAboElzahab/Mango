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
  SkeletonCell,
  SkeletonHeader,
} from './Table.styles';
import { TableProps } from './Table.types';

const Table: React.FC<TableProps & { totalCount: number }> = ({
  data,
  formFields,
  activeTabColumns,
  isLoading,
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

  const renderSkeleton = () => (
    <tbody>
      {Array.from({ length: 100 }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((_, colIndex) => (
            <StyledTd key={colIndex}>
              <SkeletonCell />
            </StyledTd>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <StyledTableWrapper ref={parentRef}>
      <StyledTable>
        <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <tr>
            {columns.map((_, index) => (
              <StyledTh key={index}>
                {isLoading ? (
                  <SkeletonHeader />
                ) : (
                  flexRender(
                    columns[index].header,
                    table.getHeaderGroups()[0].headers[index]?.getContext(),
                  )
                )}
              </StyledTh>
            ))}
          </tr>
        </thead>
        {isLoading ? (
          renderSkeleton()
        ) : (
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
        )}
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
