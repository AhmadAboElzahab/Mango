import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import Select from 'react-select';
import { FormField, UserTabColumn } from 'types/tabs'; // adjust path

interface SelectOption {
  value: string | number;
  label: string;
}

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
      cell: ({ row, getValue }) => {
        const initialValue = getValue();
        const [value, setValue] = React.useState<any>(initialValue);

        const onBlur = () => {
          updateRow(row.index, field.field_key.toLowerCase(), value);
        };

        const options: SelectOption[] =
          field.options?.map((opt) => ({
            value: opt.value,
            label: opt.label,
          })) ?? [];

        const isMulti = field.form_field_type === 'multi_relation';

        if (
          field.form_field_type === 'single_select' ||
          field.form_field_type === 'single_relation' ||
          field.form_field_type === 'multi_relation'
        ) {
          let selectedValue: SelectOption | SelectOption[] | null = null;

          if (isMulti && Array.isArray(value)) {
            selectedValue = value
              .map((v) => options.find((opt) => opt.value === (v?.value ?? v?.ID ?? v)))
              .filter(Boolean) as SelectOption[];
          } else {
            const val = value?.value ?? value?.ID ?? value;
            selectedValue = options.find((opt) => opt.value === val) ?? null;
          }

          return (
            <Select
              options={options}
              value={selectedValue}
              isMulti={isMulti}
              onChange={(selected) => {
                setValue(selected);
                updateRow(row.index, field.field_key.toLowerCase(), selected);
              }}
              onBlur={onBlur}
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              isClearable
            />
          );
        }

        return (
          <input
            value={String(value ?? '')}
            onChange={(e) => setValue(e.target.value)}
            onBlur={onBlur}
          />
        );
      },
    }));
}
