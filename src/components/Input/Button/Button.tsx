import type { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ label = 'Button', variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <StyledButton className={`button ${variant}`} {...props}>
      {children || label}
    </StyledButton>
  );
};

export default Button;
