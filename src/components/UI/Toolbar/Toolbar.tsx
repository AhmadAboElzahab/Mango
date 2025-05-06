import React, { useState } from 'react';

import { StyledToolbar } from './Toolbar.styles.ts';
import { ToolbarProps } from './Toolbar.types';
import Filter from '../Filter/Filter.tsx';

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <StyledToolbar>
      <Filter />
    </StyledToolbar>
  );
};
export default Toolbar;
