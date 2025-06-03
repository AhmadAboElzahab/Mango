import { render, screen } from '@testing-library/react';
import FilterItem from './FilterItem';
import { describe, expect, it, vi } from 'vitest';

describe('FilterItem', () => {
  it('renders the component', () => {
    render(<FilterItem data={[]} item={{} as any} onItemChange={vi.fn()} />);
    // Add your tests here
  });
});
