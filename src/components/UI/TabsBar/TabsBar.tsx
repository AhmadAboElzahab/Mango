import type React from 'react';

import TabItem from '../TabItem';
import type { TabsBarProps } from './TabsBar.types.ts';

const TabsBar: React.FC<TabsBarProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className='tabs-bar bg-black/10 transition-[width] duration-300 ease-in-out flex flex-row h-8 rounded-tr-md relative pl-3'>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          title={tab.tab_name}
          active={tab.id === activeTab.id}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  );
};

export default TabsBar;
