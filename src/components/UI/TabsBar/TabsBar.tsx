import React from 'react';
import { StyledTabsBar } from './TabsBar.styles.ts';
import TabItem from '../TabItem';
const TabsBar: React.FC = () => {
  const tabs = [
    {
      id: 1,
      name: 'Tab 1',
      active: true,
    },
    {
      id: 2,
      name: 'Tab 2',
      active: false,
    },
    {
      id: 3,
      name: 'Tab 3',
      active: false,
    },
  ];
  return (
    <StyledTabsBar>
      {tabs.map((tab) => (
        <TabItem key={tab.id} title={tab.name} active={tab.active} />
      ))}
    </StyledTabsBar>
  );
};
export default TabsBar;
