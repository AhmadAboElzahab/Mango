import { Column } from 'types/formfields';

export interface FilterItemProps {
  data: Column[];
  item: Item;
  onItemChange: (updatedItem: Item) => void;
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
