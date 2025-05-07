import { FormField, TabsResponse, UserTab } from 'types/tabs';

export interface DataContainerProps {
  model: string;
  tabsData: TabsResponse<FormField, UserTab<Record<string, unknown>>>;
}
