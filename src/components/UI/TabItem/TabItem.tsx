import React from 'react';

import { StyledSpan,StyledTabItem } from './TabItem.styles.ts';
import { TabItemProps } from './TabItem.types.ts';
const TabItem: React.FC<TabItemProps> = ({ active = false, title = '' }) => {
  return (
    <StyledTabItem $active={active}>
      <StyledSpan $active={active}>{title}</StyledSpan>
      {active && <StyledSpan $active={active}>↓</StyledSpan>}
    </StyledTabItem>
  );
};
export default TabItem;
