import { Group } from 'components/Filters/AdvancedFilter/AdvancedFilter.types';

export interface ToolbarProps {
  columns: any[];
  onToggleColumn: (fieldKey: string) => void;
  onSearch: (searchTerm: string) => void;
  formFields?: any[];
  searchValue: string;
  filters?: any;
  setFilters: (ruleset: Group) => void;
}
