import { FC, useEffect, useState } from 'react';
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
import {
  ColumnContainer,
  OperatorContainer,
  Container,
  FlexOneContainer,
  StyledInput,
  StyledSelect,
  FlexThreeHalfContainer,
  NumberInput,
  ValueContainer,
  DateInput,
} from './style';

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

const FilterItem: FC<FilterItemProps> = ({ data, item, onItemChange }) => {
  console.log('FilterItem useEffect', item);

  const [selectedColumn, setSelectedColumn] = useState(() => {
    const column = data?.find((col: any) => col?.id === item.fieldId);
    return column
      ? {
          value: { id: column.id, type: column?.form_field_type, fieldId: column.id },
          columnId: column.id,
          label: column?.label,
          selectOption: column?.options || [],
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
        if (!data?.find((column: any) => column?.id === item.fieldId)?.options) {
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
    if (item.type) {
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
    if (
      !selectedColumn ||
      !selectedColumn.value?.id ||
      !selectedColumn.value?.type ||
      selectedOperator === undefined // allow null, but block undefined
    ) {
      return;
    }
    const updatedItem: Item = {
      ...item,
      columnId: selectedColumn.value.id,
      fieldId: selectedColumn.value.fieldId,
      label: selectedColumn.label || '',
      columnType: selectedColumn.value.type,
      operator: selectedOperator,
      value:
        selectedOperator?.value === 'isEmpty' || selectedOperator?.value === 'isNotEmpty'
          ? ''
          : firstValue,
      secondOperator: selectedSecondOperator || undefined,
    };

    onItemChange(updatedItem);
  }, [selectedColumn, selectedOperator, selectedSecondOperator, firstValue]);
  return (
    <Container>
      <ColumnContainer $isCurrency={selectedColumn?.value?.type === TYPE_CURRENCY_FIELD}>
        <Select
          options={data?.map((column: any) => ({
            value: { id: column.id, type: column.form_field_type, fieldId: column.id },
            columnId: column.id,
            label: column.label,
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
        <Select
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
          data?.concat([])?.length ? (
            <FlexOneContainer>
              <Select
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
                  data?.find((column: any) => column.id === selectedColumn?.value?.id)?.options ||
                  []
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
