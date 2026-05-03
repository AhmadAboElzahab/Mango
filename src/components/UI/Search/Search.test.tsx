import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

import Search from './Search';

describe('Search', () => {
  it('renders the component', () => {
    render(<Search onSearch={vi.fn()} />);
    // Add your tests here
  });
});
