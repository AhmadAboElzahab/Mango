import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Button, { type ButtonProps } from './Button';

vi.mock('./Button.styles', () => ({
  StyledButton: (props: ButtonProps) => {
    const { children, variant, className, ...rest } = props;
    return (
      <button
        data-testid='styled-button'
        className={className || `button ${variant || 'primary'}`}
        {...rest}
      >
        {children}
      </button>
    );
  },
}));

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByTestId('styled-button');
    expect(buttonElement).toBeDefined();
    expect(buttonElement.textContent).toBe('Click me');
  });

  it('has correct attributes', () => {
    render(<Button type='submit'>Submit</Button>);
    const buttonElement = screen.getByTestId('styled-button');
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(buttonElement.getAttribute('type')).toBe('submit');
    expect(buttonElement.textContent).toBe('Submit');
  });

  it('applies the correct variant class', () => {
    render(<Button variant='secondary'>Secondary Button</Button>);
    const buttonElement = screen.getByTestId('styled-button');
    expect(buttonElement.className).toContain('secondary');
  });
});
