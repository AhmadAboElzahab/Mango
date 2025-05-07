import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  RowSelectionState,
  ColumnDef,
} from '@tanstack/react-table';
import { TableProps } from './Table.types';
import { generateEditableColumnsFromMeta } from 'core/utils/tableColumnBuilder';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTableWrapper,
  StyledIndexCell,
} from './Table.styles';
const Table: React.FC<TableProps> = ({ data, formFields }) => {
  const [tableData, setTableData] = useState(data);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const updateRow = (rowIndex: number, field: string, value: any) => {
    setTableData((prev) => {
      const updated = [...prev];
      updated[rowIndex] = { ...updated[rowIndex], [field]: value };
      return updated;
    });
  };

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: 'index',
        header: '#',
        cell: ({ row }) => {
          const [isHovered, setIsHovered] = useState(false);
          const isSelected = row.getIsSelected();

          return (
            <StyledIndexCell
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              $isSelected={isSelected}
            >
              {isHovered || isSelected ? (
                <input
                  type='checkbox'
                  checked={isSelected}
                  onChange={row.getToggleSelectedHandler()}
                />
              ) : (
                row.index + 1
              )}
            </StyledIndexCell>
          );
        },
      },
      ...generateEditableColumnsFromMeta(formFields, updateRow),
    ],
    [formFields],
  );

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <StyledTableWrapper>
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
