import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import {
  TYPE_CREATABLE_MULTI_SELECT,
  TYPE_CREATABLE_SINGLE_SELECT,
  TYPE_CURRENCY_FIELD,
  TYPE_DATE_FIELD,
  TYPE_DATETIME_FIELD,
  TYPE_EMAIL_FIELD,
  TYPE_FLOAT_FIELD,
  TYPE_FORMULA_FIELD,
  TYPE_IMAGE_FIELD,
  TYPE_INTEGER_FIELD,
  TYPE_MULTI_RELATION,
  TYPE_MULTI_SELECT,
  TYPE_MULTI_UPLOAD_FIELD,
  TYPE_PHONE_FIELD,
  TYPE_RICH_FIELD,
  TYPE_SINGLE_RELATION,
  TYPE_SINGLE_SELECT,
  TYPE_SOCIAL_URL_FIELD,
  TYPE_STRING_FIELD,
  TYPE_UPLOAD_FIELD,
  TYPE_URL,
} from '../../constants/fields';

interface FilterItemProps {
  data: any;
  item: Item;
  onItemChange: (updatedItem: Item) => void;
}

interface Item {
  id: string;
  type: 'ITEM';
  columnId: string;
  fieldId: string;
  operator: any | null;
  secondOperator?: any | null;
  columnType: string;
  value: string;
  label: string;
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

const ColumnContainer = styled.div<{ $isCurrency?: boolean }>`
  flex: 1;
  ${({ $isCurrency }) =>
    $isCurrency &&
    `
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: space-between;
  `}
`;

const OperatorContainer = styled.div`
  flex: 1;
`;

const ValueContainer = styled.div`
  flex: 1.5;
  display: flex;
  gap: 0.5rem;
`;

const FlexOneContainer = styled.div`
  flex: 1;
`;

const FlexThreeHalfContainer = styled.div`
  flex: 3.5;
`;

const StyledSelect = styled(Select)`
  .react-select__control {
    border: 1px solid #d1d5db;
    border-radius: 8px;
  }
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const DateInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const NumberInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const FilterItem: FC<FilterItemProps> = ({ data, item, onItemChange }) => {
  const [selectedColumn, setSelectedColumn] = useState(() => {
    const column = data?.columns
      ?.concat(data.extra_columns ?? [])
      .find((col: any) => col.form_field_id === item.fieldId);
    return column
      ? {
          value: { id: column.id, type: column.form_field.type, fieldId: column.form_field_id },
          columnId: column.id,
          label: column.form_field.label,
          selectOption: column.form_field.options || [],
        }
      : undefined;
  });

  const [selectedOperator, setSelectedOperator] = useState<any | null>(item?.operator || null);
  const [selectedSecondOperator, setSelectedSecondOperator] = useState<any | null>(
    item?.secondOperator || null,
  );
  const [firstValue, setFirstValue] = useState<any>(item?.value || '');
  const [_operatorOptions, setOperatorOptions] = useState<any[]>([]);

  const DateOperators = {
    other: [
      { label: 'today', value: 'today' },
      { label: 'tomorrow', value: 'tomorrow' },
      { label: 'yesterday', value: 'yesterday' },
      { label: 'one week ago', value: 'oneWeekAgo' },
      { label: 'one week from now', value: 'oneWeekFromNow' },
      { label: 'one month ago', value: 'oneMonthAgo' },
      { label: 'one month from now', value: 'oneMonthFromNow' },
      { label: 'number of days ago', value: 'numberOfDaysAgo' },
      { label: 'number of days from now', value: 'numberOfDaysFromNow' },
      { label: 'exact date', value: 'exactDate' },
    ],
    within: [
      { label: 'the past week', value: 'thePastWeek' },
      { label: 'the past month', value: 'thePastMonth' },
      { label: 'the past year', value: 'thePastYear' },
      { label: 'the new week', value: 'theNewWeek' },
      { label: 'the new month', value: 'theNewMonth' },
      { label: 'the next year', value: 'theNextYear' },
      { label: 'this calendar week', value: 'thisCalendarWeek' },
      { label: 'this calendar month', value: 'thisCalendarMonth' },
      { label: 'this calendar year', value: 'thisCalendarYear' },
      { label: 'the next number of days', value: 'theNextNumberOfDays' },
      { label: 'the past number of days', value: 'thePastNumberOfDays' },
    ],
  };

  const getOperators = (item: Item): any[] => {
    switch (item.columnType) {
      case TYPE_STRING_FIELD:
      case TYPE_RICH_FIELD:
      case TYPE_SOCIAL_URL_FIELD:
      case TYPE_IMAGE_FIELD:
      case TYPE_UPLOAD_FIELD:
      case TYPE_MULTI_UPLOAD_FIELD:
      case TYPE_URL:
      case TYPE_EMAIL_FIELD:
      case TYPE_PHONE_FIELD:
        return [
          { label: 'contains...', value: 'contains' },
          { label: 'does not contain...', value: 'doesNotContain' },
          { label: 'is...', value: 'is' },
          { label: 'is not...', value: 'isNot' },
          { label: 'is empty', value: 'isEmpty' },
          { label: 'is not empty', value: 'isNotEmpty' },
        ];
      case TYPE_FLOAT_FIELD:
      case TYPE_CURRENCY_FIELD:
      case TYPE_INTEGER_FIELD:
      case TYPE_FORMULA_FIELD:
        return [
          { label: '=', value: '=' },
          { label: '≠', value: '!=' },
          { label: '<', value: '<' },
          { label: '>', value: '>' },
          { label: '≤', value: '<=' },
          { label: '≥', value: '>=' },
          { label: 'is empty', value: 'isEmpty' },
          { label: 'is not empty', value: 'isNotEmpty' },
        ];
      case TYPE_SINGLE_RELATION:
      case TYPE_SINGLE_SELECT:
      case TYPE_CREATABLE_SINGLE_SELECT:
        if (
          !data.columns
            .concat(data.extra_columns ?? [])
            .find((column: any) => column.form_field_id === item.fieldId).form_field?.options
        ) {
          return [
            { label: 'contains...', value: 'contains' },
            { label: 'does not contain...', value: 'doesNotContain' },
            { label: 'is...', value: 'is' },
            { label: 'is not...', value: 'isNot' },
            { label: 'is empty', value: 'isEmpty' },
            { label: 'is not empty', value: 'isNotEmpty' },
          ];
        }
        return [
          { label: 'is', value: 'is' },
          { label: 'is not', value: 'isNot' },
          { label: 'is any of', value: 'isAnyOf' },
          { label: 'is none of', value: 'isNoneOf' },
          { label: 'is empty', value: 'isEmpty' },
          { label: 'is not empty', value: 'isNotEmpty' },
        ];
      case TYPE_MULTI_RELATION:
      case TYPE_MULTI_SELECT:
      case TYPE_CREATABLE_MULTI_SELECT:
        return [
          { label: 'has any of', value: 'hasAnyOf' },
          { label: 'has all of', value: 'hasAllOf' },
          { label: 'is exactly', value: 'isExactly' },
          { label: 'has none of', value: 'hasNoneOf' },
          { label: 'contains', value: 'contains' },
          { label: 'does not contain', value: 'doesNotContain' },
          { label: 'is empty', value: 'isEmpty' },
          { label: 'is not empty', value: 'isNotEmpty' },
        ];
      case TYPE_DATE_FIELD:
      case TYPE_DATETIME_FIELD:
        return [
          { label: 'is', value: 'is' },
          { label: 'is within', value: 'isWithin' },
          { label: 'is before', value: 'isBefore' },
          { label: 'is after', value: 'isAfter' },
          { label: 'is on or before', value: 'isOnOrBefore' },
          { label: 'is on or after', value: 'isOnOrAfter' },
          { label: 'is not', value: 'isNot' },
          { label: 'is empty', value: 'isEmpty' },
          { label: 'is not empty', value: 'isNotEmpty' },
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    if (item.columnType) {
      const operators = getOperators(item);
      setOperatorOptions(operators);

      if (!operators.some((op) => op.value === selectedOperator?.value)) {
        setSelectedOperator(null);
      }
    } else {
      setOperatorOptions([]);
      setSelectedOperator(null);
    }
  }, [item]);

  useEffect(() => {
    const updatedItem: Item = {
      ...item,
      columnId: selectedColumn?.value?.id || '',
      fieldId: selectedColumn?.value?.fieldId || '',
      label: selectedColumn?.label || '',
      columnType: selectedColumn?.value?.type || '',
      operator: selectedOperator,
      value:
        selectedOperator?.value === 'isEmpty' || selectedOperator?.value === 'isNotEmpty'
          ? ''
          : firstValue,
    };
    if (selectedSecondOperator) {
      updatedItem.secondOperator = selectedSecondOperator;
    }
    onItemChange(updatedItem);
  }, [selectedColumn, selectedOperator, selectedSecondOperator, firstValue]);

  return (
    <Container>
      <ColumnContainer $isCurrency={selectedColumn?.value?.type === TYPE_CURRENCY_FIELD}>
        <StyledSelect
          options={data?.columns?.concat(data?.extra_columns ?? []).map((column: any) => ({
            value: { id: column.id, type: column.form_field.type, fieldId: column.form_field_id },
            columnId: column.id,
            label: column.form_field.label,
            options: column.form_field.options || [],
          }))}
          value={selectedColumn as any}
          onChange={(e: any) => {
            setSelectedColumn(e);
            setSelectedOperator(null);
            setSelectedSecondOperator(null);
            setFirstValue('');
          }}
        />
      </ColumnContainer>

      <OperatorContainer>
        <StyledSelect
          isClearable={false}
          options={_operatorOptions}
          value={selectedOperator}
          onChange={(e: any) => {
            setSelectedOperator(e);
            setSelectedSecondOperator(null);
            setFirstValue('');
          }}
        />
      </OperatorContainer>

      <ValueContainer data-id={selectedColumn?.value?.type}>
        {(selectedOperator?.value === 'is' ||
          selectedOperator?.value === 'isNot' ||
          selectedOperator?.value === 'isAnyOf' ||
          selectedOperator?.value === 'hasAnyOf' ||
          selectedOperator?.value === 'hasAllOf' ||
          selectedOperator?.value === 'isExactly' ||
          selectedOperator?.value === 'hasNoneOf' ||
          selectedOperator?.value === 'isNoneOf') &&
        (selectedColumn?.value?.type === TYPE_SINGLE_RELATION ||
          selectedColumn?.value?.type === TYPE_SINGLE_SELECT ||
          selectedColumn?.value?.type === TYPE_MULTI_SELECT ||
          selectedColumn?.value?.type === TYPE_CREATABLE_SINGLE_SELECT ||
          selectedColumn?.value?.type === TYPE_MULTI_RELATION ||
          selectedColumn?.value?.type === TYPE_CREATABLE_MULTI_SELECT) ? (
          data.columns.concat(data.extra_columns ?? [])?.length ? (
            <FlexOneContainer>
              <StyledSelect
                isMulti={
                  selectedOperator?.value === 'isAnyOf' ||
                  selectedOperator?.value === 'isNoneOf' ||
                  selectedOperator?.value === 'hasAnyOf' ||
                  selectedOperator?.value === 'hasAllOf' ||
                  selectedOperator?.value === 'isExactly' ||
                  selectedOperator?.value === 'hasNoneOf'
                }
                isClearable={false}
                options={
                  data.columns
                    .concat(data.extra_columns ?? [])
                    .find((column: any) => column.id === selectedColumn?.value?.id)?.form_field
                    ?.options || []
                }
                value={firstValue}
                onChange={(e: any) => setFirstValue(e)}
              />
            </FlexOneContainer>
          ) : (
            <FlexOneContainer>
              <StyledInput
                placeholder='Enter a value'
                value={firstValue}
                type='text'
                onChange={(e: any) => setFirstValue(e.target.value)}
              />
            </FlexOneContainer>
          )
        ) : selectedOperator?.value === 'isEmpty' ||
          selectedOperator?.value === 'isNotEmpty' ? null : selectedColumn?.value?.type ===
            TYPE_DATE_FIELD || selectedColumn?.value?.type === TYPE_DATETIME_FIELD ? (
          <FlexThreeHalfContainer>
            <StyledSelect
              isClearable={false}
              options={
                selectedOperator?.value === 'isWithin'
                  ? DateOperators['within']
                  : DateOperators['other']
              }
              value={selectedSecondOperator}
              onChange={(e: any) => {
                setSelectedSecondOperator(e);
                setFirstValue('');
              }}
            />
          </FlexThreeHalfContainer>
        ) : (
          <FlexOneContainer>
            <StyledInput
              placeholder='Enter a value'
              value={firstValue}
              onChange={(e: any) => {
                const value = e.target.value;
                if (selectedColumn?.value?.type === TYPE_INTEGER_FIELD) {
                  if (/^-?\d*$/.test(value)) {
                    setFirstValue(value);
                  }
                } else if (
                  selectedColumn?.value?.type === TYPE_FLOAT_FIELD ||
                  selectedColumn?.value?.type === TYPE_CURRENCY_FIELD
                ) {
                  if (/^-?\d*\.?\d*$/.test(value)) {
                    setFirstValue(value);
                  }
                } else {
                  setFirstValue(value);
                }
              }}
            />
          </FlexOneContainer>
        )}

        {selectedSecondOperator?.value === 'exactDate' ? (
          <DateInput
            type='date'
            value={firstValue}
            onChange={(e: any) => setFirstValue(e.target.value)}
          />
        ) : selectedSecondOperator?.value === 'theNextNumberOfDays' ||
          selectedSecondOperator?.value === 'thePastNumberOfDays' ||
          selectedSecondOperator?.value === 'numberOfDaysAgo' ||
          selectedSecondOperator?.value === 'numberOfDaysFromNow' ? (
          <FlexOneContainer>
            <NumberInput
              type='number'
              placeholder='Enter a value'
              value={firstValue}
              onChange={(e: any) => setFirstValue(e.target.value)}
            />
          </FlexOneContainer>
        ) : null}
      </ValueContainer>
    </Container>
  );
};

export default FilterItem;
