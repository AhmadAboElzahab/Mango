import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Header from './Header';

describe('Header', () => {
  it('renders the component', () => {
    render(<Header />);
  });
});
