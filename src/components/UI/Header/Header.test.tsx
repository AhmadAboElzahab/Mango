import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Header from './Header';
import { type HeaderProps } from './Header.types';

vi.mock('./Header.styles', () => ({
  HeaderWrapper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='header-wrapper'>{children}</div>
  ),
  StyledLink: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a data-testid='styled-link' href={to}>
      {children}
    </a>
  ),
}));

describe('Header', () => {
  const mockLinks: HeaderProps['Links'] = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About' },
  ];

  it('renders the logo and links', () => {
    render(<Header Links={mockLinks} />);
    expect(screen.getByText('logo')).toBeInTheDocument();

    // Check each link label is rendered
    mockLinks.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    // Check styled links are rendered
    const linkElements = screen.getAllByTestId('styled-link');
    expect(linkElements).toHaveLength(mockLinks.length);
  });

  it('renders correct href attributes', () => {
    render(<Header Links={mockLinks} />);
    const linkElements = screen.getAllByTestId('styled-link');
    linkElements.forEach((link, index) => {
      expect(link).toHaveAttribute('href', mockLinks[index].to);
    });
  });
});
