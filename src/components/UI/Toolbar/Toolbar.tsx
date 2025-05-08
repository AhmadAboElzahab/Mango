import React from 'react';

import ColumnsManagment from '../ColumnsManagment/ColumnsManagment.tsx';
import Filter from '../Filter/Filter.tsx';
import { StyledToolbar } from './Toolbar.styles.ts';
import { ToolbarProps } from './Toolbar.types';

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return (
    <StyledToolbar>
      <Filter />
      <ColumnsManagment columns={props.columns} onToggleColumn={props.onToggleColumn} />
    </StyledToolbar>
  );
};
export default Toolbar;
