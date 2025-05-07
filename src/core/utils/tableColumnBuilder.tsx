import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { FormField } from 'types/tabs'; // adjust path if needed

export function generateEditableColumnsFromMeta<T>(
  formFields: FormField[],
  updateRow: (rowIndex: number, field: string, value: any) => void,
): ColumnDef<T>[] {
  return formFields
    .filter((f) => f.table_is_visible)
    .sort((a, b) => a.table_order - b.table_order)
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
