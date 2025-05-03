import React from 'react';
import { StyledTabsBar } from './TabsBar.styles.ts';
import TabItem from '../TabItem';
const TabsBar: React.FC = () => {
  return (
    <StyledTabsBar>
      <TabItem />
    </StyledTabsBar>
  );
};
export default TabsBar;
