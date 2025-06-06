import { Group } from '../AdvancedFilter/AdvancedFilter.types';

export interface FilterItemProps {
  dataState: any;
  value: Group;
  handleChange: (ruleset: Group) => void;
}
export interface Item {
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
