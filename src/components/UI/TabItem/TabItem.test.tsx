import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TabItem from './TabItem';
import type { TabItemProps } from './TabItem.types';

describe('TabItem', () => {
  const setup = (props?: Partial<TabItemProps>) => {
    const defaultProps: TabItemProps = {
      active: false,
      title: 'Test Tab',
      ...props,
    };
    return render(<TabItem {...defaultProps} />);
  };

  it('renders the tab title', () => {
    setup();
    expect(screen.getByText('Test Tab')).toBeInTheDocument();
  });

  it('applies active class when active', () => {
    const { container } = setup({ active: true });
    expect(container.firstChild).toHaveClass('tab-item--active');
  });

  it('does not apply active class when inactive', () => {
    const { container } = setup({ active: false });
    expect(container.firstChild).not.toHaveClass('tab-item--active');
  });

  it('shows arrow indicator when active', () => {
    setup({ active: true });
    expect(screen.getByText('↓')).toBeInTheDocument();
  });

  it('does not show arrow indicator when inactive', () => {
    setup({ active: false });
    expect(screen.queryByText('↓')).not.toBeInTheDocument();
  });
});
