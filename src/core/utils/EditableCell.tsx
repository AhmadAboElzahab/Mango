import { useState } from 'react';
import Select from 'react-select';
import type { FormField } from 'types/tabs';

interface SelectOption {
  value: string | number;
  label: string;
}

export interface EditableCellProps {
  initialValue: any;
  field: FormField;
  rowIndex: number;
  updateRow: (rowIndex: number, field: string, value: any) => void;
}

const EditableCell = ({ initialValue, field, rowIndex, updateRow }: EditableCellProps) => {
  const [value, setValue] = useState<any>(initialValue);

  const onBlur = () => {
    updateRow(rowIndex, field.field_key.toLowerCase(), value);
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
          updateRow(rowIndex, field.field_key.toLowerCase(), selected);
        }}
        onBlur={onBlur}
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        isClearable
      />
    );
  }

  return (
    <input value={String(value ?? '')} onChange={(e) => setValue(e.target.value)} onBlur={onBlur} />
  );
};

export default EditableCell;
