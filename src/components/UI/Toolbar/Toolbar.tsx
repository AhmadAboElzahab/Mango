import AdvancedFilter from 'components/Filters/AdvancedFilter/AdvancedFilter.tsx';

import ColumnsManagment from '../ColumnsManagment/ColumnsManagment.tsx';
import Search from '../Search/Search.tsx';
import { StyledToolbar } from './Toolbar.styles.ts';
import { ToolbarProps } from './Toolbar.types';

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return (
    <StyledToolbar>
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
    </StyledToolbar>
  );
};
export default Toolbar;
