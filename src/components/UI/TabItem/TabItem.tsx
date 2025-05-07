import React from 'react';
import { StyledSpan, StyledTabItem } from './TabItem.styles.ts';
import { TabItemProps } from './TabItem.types.ts';

const TabItem: React.FC<TabItemProps> = ({ active = false, title = '', onClick }) => {
  return (
    <StyledTabItem $active={active} onClick={onClick}>
      <StyledSpan $active={active}>{title}</StyledSpan>
      {active && <StyledSpan $active={active}>↓</StyledSpan>}
    </StyledTabItem>
  );
};

export default TabItem;
