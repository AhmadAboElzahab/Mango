import type { ColumnDef } from '@tanstack/react-table';
import type { FormField, UserTabColumn } from 'types/tabs';

import EditableCell from './EditableCell';

export function generateEditableColumnsFromMeta<T>(
  formFields: FormField[],
  tabColumns: UserTabColumn[],
  updateRow: (rowIndex: number, field: string, value: any) => void,
): ColumnDef<T>[] {
  const columnSettingsMap = new Map(tabColumns.map((col) => [col.form_field_id, col]));

  return formFields
    .filter((field) => {
      const columnSetting = columnSettingsMap.get(field.id);
      return columnSetting?.visible;
    })
    .sort((a, b) => {
      const orderA = columnSettingsMap.get(a.id)?.order ?? 0;
      const orderB = columnSettingsMap.get(b.id)?.order ?? 0;
      return orderA - orderB;
    })
    .map((field) => ({
      header: field.label,
      accessorKey: field.field_key.includes('.')
        ? field.field_key.split('.')[0].toLowerCase()
        : field.field_key.toLowerCase(),
      cell: ({ row, getValue }: { row: any; getValue: () => any }) => (
        <EditableCell
          initialValue={getValue()}
          field={field}
          rowIndex={row.index}
          updateRow={updateRow}
        />
      ),
    }));
}
