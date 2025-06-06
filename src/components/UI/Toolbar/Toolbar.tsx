import React, { useState } from 'react';

import ColumnsManagment from '../ColumnsManagment/ColumnsManagment.tsx';
import { StyledToolbar } from './Toolbar.styles.ts';
import { ToolbarProps } from './Toolbar.types';
import Search from '../Search/Search.tsx';
import AdvancedFilter from 'components/Filters/AdvancedFilter/AdvancedFilter.tsx';

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return (
    <StyledToolbar>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ColumnsManagment columns={props.columns} onToggleColumn={props.onToggleColumn} />
        <AdvancedFilter
          dataState={props.formFields}
          handleChange={props.setFilters}
          value={props.filters}
        />
      </div>
      <div>
        <Search onSearch={props.onSearch} searchValue={props.searchValue} />
      </div>
    </StyledToolbar>
  );
};
export default Toolbar;
