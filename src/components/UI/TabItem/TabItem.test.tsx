import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';

import TabItem from './TabItem';
import { type TabItemProps } from './TabItem.types';

// Mock the styled-components
vi.mock('./TabItem.styles', () => ({
  StyledTabItem: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='styled-tab-item'>{children}</div>
  ),
  StyledSpan: ({ children }: { children: React.ReactNode }) => (
    <span data-testid='styled-span'>{children}</span>
  ),
}));

describe('TabItem', () => {
  const setup = (props?: Partial<TabItemProps>) => {
    const defaultProps: TabItemProps = {
      active: false,
      ...props,
    };
    render(<TabItem {...defaultProps} />);
  };

  it('renders the styled container', () => {
    setup();
    expect(screen.getByTestId('styled-tab-item')).toBeInTheDocument();
  });

  it('renders the correct number of spans', () => {
    setup();
    const spans = screen.getAllByTestId('styled-span');
    expect(spans.length).toBeGreaterThan(0);
  });
});
