import { UserTab } from 'types/tabs';

export interface TabsBarProps {
  tabs: UserTab[];
  activeTab: UserTab;
  onTabChange: (tab: UserTab) => void;
}
