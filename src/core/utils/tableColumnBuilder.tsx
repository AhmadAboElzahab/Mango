import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { FormField, UserTabColumn } from 'types/tabs'; // adjust path

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
      accessorKey: field.field_key.toLowerCase(),
      cell: ({ row, getValue }) => {
        const initialValue = getValue();
        const [value, setValue] = React.useState(initialValue);

        const onBlur = () => {
          updateRow(row.index, field.field_key.toLowerCase(), value);
        };

        if (field.form_field_type === 'single_select') {
          return (
            <select
              value={value?.ID ?? ''}
              onChange={(e) =>
                setValue(field.options?.find((opt) => String(opt.value) === e.target.value) || {})
              }
              onBlur={onBlur}
            >
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          );
        }

        return (
          <input value={String(value)} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />
        );
      },
    }));
}
