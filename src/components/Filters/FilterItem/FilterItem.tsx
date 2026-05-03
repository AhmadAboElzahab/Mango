import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { Column } from 'types/formfields';
import { DateOperators, getOperators } from 'utils/filterOperator';

import {
  TYPE_CREATABLE_MULTI_SELECT,
  TYPE_CREATABLE_SINGLE_SELECT,
  TYPE_CURRENCY_FIELD,
  TYPE_DATE_FIELD,
  TYPE_DATETIME_FIELD,
  TYPE_FLOAT_FIELD,
  TYPE_INTEGER_FIELD,
  TYPE_MULTI_RELATION,
  TYPE_MULTI_SELECT,
  TYPE_SINGLE_RELATION,
  TYPE_SINGLE_SELECT,
} from '../../../constants/fields';
import { FilterItemProps, Item } from './FilterItem.types';

const selectStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    border: '1px solid #d1d5db',
    borderRadius: '8px',
  }),
};

const inputClass =
  'px-3 py-2 border border-[#d1d5db] rounded-lg outline-none focus:border-[#3b82f6] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] placeholder:text-[#9ca3af]';

// Constants
const MULTI_VALUE_OPERATORS = [
  'isAnyOf',
  'isNoneOf',
  'hasAnyOf',
  'hasAllOf',
  'isExactly',
  'hasNoneOf',
] as const;

const EMPTY_OPERATORS = ['isEmpty', 'isNotEmpty'] as const;

const SELECT_OPERATORS = [
  'is',
  'isNot',
  'isAnyOf',
  'hasAnyOf',
  'hasAllOf',
  'isExactly',
  'hasNoneOf',
  'isNoneOf',
] as const;

const SELECT_FIELD_TYPES = [
  TYPE_SINGLE_RELATION,
  TYPE_SINGLE_SELECT,
  TYPE_MULTI_SELECT,
  TYPE_CREATABLE_SINGLE_SELECT,
  TYPE_MULTI_RELATION,
  TYPE_CREATABLE_MULTI_SELECT,
] as const;

const DATE_FIELD_TYPES = [TYPE_DATE_FIELD, TYPE_DATETIME_FIELD] as const;

const NUMERIC_FIELD_TYPES = [TYPE_INTEGER_FIELD, TYPE_FLOAT_FIELD, TYPE_CURRENCY_FIELD] as const;

const DATE_NUMBER_OPERATORS = [
  'theNextNumberOfDays',
  'thePastNumberOfDays',
  'numberOfDaysAgo',
  'numberOfDaysFromNow',
] as const;

// Helper functions
const isMultiOperator = (operator: string): boolean =>
  MULTI_VALUE_OPERATORS.includes(operator as any);

const isEmptyOperator = (operator: string): boolean => EMPTY_OPERATORS.includes(operator as any);

const isSelectOperator = (operator: string): boolean => SELECT_OPERATORS.includes(operator as any);

const isSelectFieldType = (fieldType: string): boolean =>
  SELECT_FIELD_TYPES.includes(fieldType as any);

const isDateFieldType = (fieldType: string): boolean => DATE_FIELD_TYPES.includes(fieldType as any);

const isNumericFieldType = (fieldType: string): boolean =>
  NUMERIC_FIELD_TYPES.includes(fieldType as any);

const isDateNumberOperator = (operator: string): boolean =>
  DATE_NUMBER_OPERATORS.includes(operator as any);

const FilterItem: FC<FilterItemProps> = ({ data, item, onItemChange }) => {
  const [selectedColumn, setSelectedColumn] = useState<Column | undefined>(() =>
    data.find((col) => col.id === item.fieldId),
  );
  const [selectedOperator, setSelectedOperator] = useState<any>(item?.operator || null);
  const [selectedSecondOperator, setSelectedSecondOperator] = useState<any>(
    item?.secondOperator || null,
  );
  const [firstValue, setFirstValue] = useState<any>(item?.value || '');

  const operatorOptions = useMemo(() => {
    if (!item.type || !selectedColumn) return [];
    const hasOptions = !!data?.find((column) => column?.id === item.fieldId)?.options;
    return getOperators(item, hasOptions);
  }, [item.type, selectedColumn, data, item.fieldId]);

  const fieldOptions = useMemo(
    () =>
      data.map((column) => ({
        value: column.id,
        label: column.label,
        column,
      })),
    [data],
  );

  useEffect(() => {
    const isValidOperator = operatorOptions.some((op) => op.value === selectedOperator?.value);
    if (!selectedOperator || !isValidOperator) {
      setSelectedOperator(null);
    }
  }, [operatorOptions, selectedOperator]);

  useEffect(() => {
    if (!selectedColumn || selectedOperator === undefined) return;

    const shouldClearValue = isEmptyOperator(selectedOperator?.value);

    const updatedItem: Item = {
      ...item,
      columnId: selectedColumn.id,
      fieldId: selectedColumn.id,
      label: selectedColumn.label || '',
      columnType: selectedColumn.form_field_type,
      operator: selectedOperator,
      value: shouldClearValue ? '' : firstValue,
      secondOperator: selectedSecondOperator || undefined,
    };

    onItemChange(updatedItem);
  }, [selectedColumn, selectedOperator, selectedSecondOperator, firstValue, item, onItemChange]);

  const handleColumnChange = useCallback(
    (option: any) => {
      const column = data.find((col) => col.id === option.value);
      setSelectedColumn(column);
      setSelectedOperator(null);
      setSelectedSecondOperator(null);
      setFirstValue('');
    },
    [data],
  );

  const handleOperatorChange = useCallback((operator: any) => {
    setSelectedOperator(operator);
    setSelectedSecondOperator(null);
    setFirstValue('');
  }, []);

  const handleSecondOperatorChange = useCallback((operator: any) => {
    setSelectedSecondOperator(operator);
    setFirstValue('');
  }, []);

  const handleInputChange = useCallback((value: string, fieldType: string) => {
    if (fieldType === TYPE_INTEGER_FIELD && /^-?\d*$/.test(value)) {
      setFirstValue(value);
    } else if (isNumericFieldType(fieldType) && /^-?\d*\.?\d*$/.test(value)) {
      setFirstValue(value);
    } else if (!isNumericFieldType(fieldType)) {
      setFirstValue(value);
    }
  }, []);

  const renderSelectInput = () => (
    <Select
      isMulti={isMultiOperator(selectedOperator?.value)}
      isClearable={false}
      options={selectedColumn?.options || []}
      value={firstValue}
      onChange={setFirstValue}
    />
  );

  const renderDateInput = () => {
    const operatorValue = selectedOperator?.value;
    const dateOperators =
      operatorValue === 'isWithin' ? DateOperators['within'] : DateOperators['other'];

    return (
      <>
        <Select
          isClearable={false}
          options={dateOperators}
          value={selectedSecondOperator}
          onChange={handleSecondOperatorChange}
          styles={selectStyles}
        />
        {selectedSecondOperator?.value === 'exactDate' && (
          <input
            type='date'
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
            className={`flex-1 ${inputClass}`}
          />
        )}
        {isDateNumberOperator(selectedSecondOperator?.value) && (
          <input
            type='number'
            placeholder='Enter a value'
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
            className={inputClass}
          />
        )}
      </>
    );
  };

  const renderTextInput = () => (
    <input
      placeholder='Enter a value'
      value={firstValue}
      onChange={(e) => handleInputChange(e.target.value, selectedColumn?.form_field_type || '')}
      className={inputClass}
    />
  );

  const renderValueInput = () => {
    const fieldType = selectedColumn?.form_field_type || '';
    const operatorValue = selectedOperator?.value;

    if (isEmptyOperator(operatorValue)) return null;
    if (isSelectOperator(operatorValue) && isSelectFieldType(fieldType)) return renderSelectInput();
    if (isDateFieldType(fieldType)) return renderDateInput();
    return renderTextInput();
  };

  const selectedColumnOption = selectedColumn
    ? { value: selectedColumn.id, label: selectedColumn.label }
    : null;

  const isCurrency = selectedColumn?.form_field_type === TYPE_CURRENCY_FIELD;

  return (
    <div className="flex flex-row gap-2 items-center">
      <div
        className={`flex-1 ${isCurrency ? 'flex flex-row gap-2 justify-between' : ''}`}
      >
        <Select options={fieldOptions} value={selectedColumnOption} onChange={handleColumnChange} />
      </div>

      <div className="flex-1">
        <Select
          isClearable={false}
          options={operatorOptions}
          value={selectedOperator}
          onChange={handleOperatorChange}
        />
      </div>

      <div className="flex-[1.5] flex gap-2">{renderValueInput()}</div>
    </div>
  );
};

export default FilterItem;
