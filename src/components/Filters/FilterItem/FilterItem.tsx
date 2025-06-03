import { FC, useEffect, useMemo, useState, useCallback } from 'react';
import Select from 'react-select';
import {
  TYPE_CURRENCY_FIELD,
  TYPE_DATE_FIELD,
  TYPE_DATETIME_FIELD,
  TYPE_FLOAT_FIELD,
  TYPE_INTEGER_FIELD,
  TYPE_SINGLE_RELATION,
  TYPE_MULTI_RELATION,
  TYPE_SINGLE_SELECT,
  TYPE_MULTI_SELECT,
  TYPE_CREATABLE_SINGLE_SELECT,
  TYPE_CREATABLE_MULTI_SELECT,
} from '../../../constants/fields';
import {
  ColumnContainer,
  OperatorContainer,
  Container,
  StyledInput,
  StyledSelect,
  NumberInput,
  ValueContainer,
  DateInput,
} from './FilterItem.styles';
import { DateOperators, getOperators } from 'utils/filterOperator';
import { FilterItemProps, Item } from './FilterItem.types';
import { Column } from 'types/formfields';

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
  // State
  const [selectedColumn, setSelectedColumn] = useState<Column | undefined>(() =>
    data.find((col) => col.id === item.fieldId),
  );
  const [selectedOperator, setSelectedOperator] = useState<any>(item?.operator || null);
  const [selectedSecondOperator, setSelectedSecondOperator] = useState<any>(
    item?.secondOperator || null,
  );
  const [firstValue, setFirstValue] = useState<any>(item?.value || '');

  // Memoized values
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

  // Effects
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

  // Event handlers
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

  // Render methods
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
        <StyledSelect
          isClearable={false}
          options={dateOperators}
          value={selectedSecondOperator}
          onChange={handleSecondOperatorChange}
        />
        {selectedSecondOperator?.value === 'exactDate' && (
          <DateInput
            type='date'
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
        )}
        {isDateNumberOperator(selectedSecondOperator?.value) && (
          <NumberInput
            type='number'
            placeholder='Enter a value'
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
        )}
      </>
    );
  };

  const renderTextInput = () => (
    <StyledInput
      placeholder='Enter a value'
      value={firstValue}
      onChange={(e) => handleInputChange(e.target.value, selectedColumn?.form_field_type || '')}
    />
  );

  const renderValueInput = () => {
    const fieldType = selectedColumn?.form_field_type || '';
    const operatorValue = selectedOperator?.value;

    // Handle empty operators
    if (isEmptyOperator(operatorValue)) {
      return null;
    }

    // Handle select fields
    if (isSelectOperator(operatorValue) && isSelectFieldType(fieldType)) {
      return renderSelectInput();
    }

    // Handle date fields
    if (isDateFieldType(fieldType)) {
      return renderDateInput();
    }

    // Handle text/numeric inputs
    return renderTextInput();
  };

  const selectedColumnOption = selectedColumn
    ? { value: selectedColumn.id, label: selectedColumn.label }
    : null;

  return (
    <Container>
      <ColumnContainer $isCurrency={selectedColumn?.form_field_type === TYPE_CURRENCY_FIELD}>
        <Select options={fieldOptions} value={selectedColumnOption} onChange={handleColumnChange} />
      </ColumnContainer>

      <OperatorContainer>
        <Select
          isClearable={false}
          options={operatorOptions}
          value={selectedOperator}
          onChange={handleOperatorChange}
        />
      </OperatorContainer>

      <ValueContainer>{renderValueInput()}</ValueContainer>
    </Container>
  );
};

export default FilterItem;
