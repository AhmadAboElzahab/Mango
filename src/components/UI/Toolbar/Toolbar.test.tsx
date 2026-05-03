import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { Group } from 'components/Filters/AdvancedFilter/AdvancedFilter.types';

import Toolbar from './Toolbar';

const emptyGroup: Group = { id: '1', type: 'GROUP', conjunction: 'and', children: [] };

describe('Toolbar', () => {
  it('renders the component', () => {
    render(
      <Toolbar
        columns={[]}
        onToggleColumn={vi.fn()}
        onSearch={vi.fn()}
        searchValue=""
        setFilters={vi.fn()}
        filters={emptyGroup}
      />,
    );
    // Add your tests here
  });
});
