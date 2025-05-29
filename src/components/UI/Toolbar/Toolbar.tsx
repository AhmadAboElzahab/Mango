import React, { useState } from 'react';

import ColumnsManagment from '../ColumnsManagment/ColumnsManagment.tsx';
import Filter from '../Filter/Filter.tsx';
import { StyledToolbar } from './Toolbar.styles.ts';
import { ToolbarProps } from './Toolbar.types';
import Search from '../Search/Search.tsx';
import AdvancedFilter from 'components/advanced/AdvancedFilter.tsx';
import { nanoid } from 'nanoid';

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const [state, setState] = useState({
    id: nanoid(),
    type: 'GROUP',
    conjunction: 'and',
    children: [],
  });
  return (
    <StyledToolbar>
      <Filter />
      <ColumnsManagment columns={props.columns} onToggleColumn={props.onToggleColumn} />
      <Search onSearch={props.onSearch} />
      <AdvancedFilter dataState={props.formFields} handleChange={setState} value={state} />
      {/* {JSON.stringify(props.formFields)} */}
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        Print
      </button>
    </StyledToolbar>
  );
};
export default Toolbar;
