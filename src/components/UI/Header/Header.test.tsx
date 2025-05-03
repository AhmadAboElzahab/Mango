import { render, screen } from '@testing-library/react';
import Header from './Header';
import { describe, expect, it, vi } from 'vitest';

describe('Header', () => {
  it('renders the component', () => {
    render(<Header />);
  });
});
