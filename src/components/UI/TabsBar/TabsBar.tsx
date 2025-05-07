import React from 'react';
import TabItem from '../TabItem';
import { StyledTabsBar } from './TabsBar.styles.ts';
import { TabsBarProps } from './TabsBar.types.ts';

const TabsBar: React.FC<TabsBarProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <StyledTabsBar>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          title={tab.tab_name}
          active={tab.id === activeTab.id}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </StyledTabsBar>
  );
};

export default TabsBar;
