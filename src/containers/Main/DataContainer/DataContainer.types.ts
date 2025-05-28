import { FormField, TabsResponse, UserTab } from 'types/tabs';

export interface DataContainerProps {
  model: string;
  filters: any;
  setFilters: any;
  tabsData: TabsResponse<FormField, UserTab<Record<string, unknown>>>;
}
