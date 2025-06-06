export interface AdvancedFilterProps {}
export interface Item {
  id: string;
  type: 'ITEM';
  columnId: string;
  fieldId: string;
  operator: any;
  secondOperator?: any;
  columnType: string;
  value: string;
  label: string;
}

export interface Group {
  id: string;
  type: 'GROUP';
  conjunction: 'and' | 'or';
  children: (Item | Group)[];
}
