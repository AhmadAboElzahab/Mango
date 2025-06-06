import React, { useState } from 'react';

import ColumnsManagment from '../ColumnsManagment/ColumnsManagment.tsx';
import { StyledToolbar } from './Toolbar.styles.ts';
import { ToolbarProps } from './Toolbar.types';
import Search from '../Search/Search.tsx';
import AdvancedFilter from 'components/Filters/AdvancedFilter/AdvancedFilter.tsx';

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return (
    <StyledToolbar>
      <ColumnsManagment columns={props.columns} onToggleColumn={props.onToggleColumn} />
      <Search onSearch={props.onSearch} searchValue={props.searchValue} />
      <AdvancedFilter
        dataState={props.formFields}
        handleChange={props.setFilters}
        value={props.filters}
      />
    </StyledToolbar>
  );
};
export default Toolbar;
