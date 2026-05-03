import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import FilterItem from './FilterItem';

describe('FilterItem', () => {
  it('renders the component', () => {
    render(<FilterItem data={[]} item={{} as any} onItemChange={vi.fn()} />);
    // Add your tests here
  });
});
