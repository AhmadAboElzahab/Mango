import { render, screen } from '@testing-library/react';
import Login from './Login';
import { describe, expect, it, vi } from 'vitest';

describe('Login', () => {
  it('renders the component', () => {
    render(<Login />);
    // Add your tests here
  });
});
