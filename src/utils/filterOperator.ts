import { Item } from 'components/Filters/FilterItem/FilterItem.types';
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
} from '../constants/fields';

export const DateOperators = {
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
export const getOperators = (item: Item, itemOption: boolean): any[] => {
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
      if (!itemOption) {
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
