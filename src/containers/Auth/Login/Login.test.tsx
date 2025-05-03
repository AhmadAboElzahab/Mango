import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { describe, expect, it, vi } from 'vitest';

describe('Login', () => {
  it('should render without crashing', () => {
    render(<Login />);
    expect(screen.getByText(/works/i)).toBeInTheDocument();
  });
});
