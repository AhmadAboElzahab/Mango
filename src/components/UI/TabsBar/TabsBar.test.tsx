import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import TabsBar from './TabsBar';

// Mock styled container
vi.mock('./TabsBar.styles.ts', () => ({
  StyledTabsBar: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='styled-tabs-bar'>{children}</div>
  ),
}));

// Mock TabItem component
vi.mock('../TabItem', () => ({
  default: ({ title, active }: { title: string; active: boolean }) => (
    <div data-testid='tab-item'>
      <span>{title}</span>
      <span>{active ? 'active' : 'inactive'}</span>
    </div>
  ),
}));

describe('TabsBar', () => {
  it('renders the container and tab items', () => {
    render(<TabsBar />);

    // Check the styled container
    expect(screen.getByTestId('styled-tabs-bar')).toBeInTheDocument();

    // Check all tab items rendered
    const tabItems = screen.getAllByTestId('tab-item');
    expect(tabItems).toHaveLength(3);

    // Check each tab label and active status
    expect(tabItems[0]).toHaveTextContent('Tab 1');
    expect(tabItems[0]).toHaveTextContent('active');

    expect(tabItems[1]).toHaveTextContent('Tab 2');
    expect(tabItems[1]).toHaveTextContent('inactive');

    expect(tabItems[2]).toHaveTextContent('Tab 3');
    expect(tabItems[2]).toHaveTextContent('inactive');
  });
});
