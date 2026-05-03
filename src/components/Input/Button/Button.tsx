import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#007bff] text-white enabled:hover:bg-[#0069d9]',
  secondary: 'bg-[#6c757d] text-white enabled:hover:bg-[#5a6268]',
  danger: 'bg-[#dc3545] text-white enabled:hover:bg-[#c82333]',
};

const Button = ({
  label = 'Button',
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded cursor-pointer font-bold border-none transition-all duration-200 disabled:opacity-65 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children || label}
    </button>
  );
};

export default Button;
