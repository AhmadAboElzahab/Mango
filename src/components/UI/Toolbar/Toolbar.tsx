import AdvancedFilter from 'components/Filters/AdvancedFilter/AdvancedFilter.tsx';
import type { FC } from 'react';

import ColumnsManagment from '../ColumnsManagment/ColumnsManagment.tsx';
import Search from '../Search/Search.tsx';
import { ToolbarProps } from './Toolbar.types';

const Toolbar: FC<ToolbarProps> = (props) => {
  return (
    <div className='max-h-11 min-h-11 relative z-7 flex flex-row justify-between items-center left-0 right-2 top-0 text-inherit whitespace-nowrap px-3 bg-white font-normal border-b border-[#c2c5c8]'>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
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
    </div>
  );
};
export default Toolbar;
