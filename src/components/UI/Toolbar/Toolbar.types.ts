export interface ToolbarProps {
  columns: any[];
  onToggleColumn: (fieldKey: string) => void;
  onSearch: (searchTerm: string) => void;
  formFields?: any[];
}
