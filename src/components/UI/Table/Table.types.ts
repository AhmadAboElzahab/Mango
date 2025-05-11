import { FormField, UserTabColumn } from 'types/tabs';

export interface TableProps {
  data: any[];
  formFields: FormField[];
  activeTabColumns: UserTabColumn[];
  isLoading: boolean;
}
