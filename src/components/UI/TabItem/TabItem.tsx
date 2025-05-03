import React from 'react';
import { StyledTabItem, StyledSpan } from './TabItem.styles.ts';
const TabItem: React.FC = () => {
  return (
    <StyledTabItem className='tab-item'>
      <StyledSpan>ahmad</StyledSpan>
      <StyledSpan>↓</StyledSpan>
    </StyledTabItem>
  );
};
export default TabItem;
