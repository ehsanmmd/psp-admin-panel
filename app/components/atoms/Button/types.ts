import { ReactNode } from 'react';

export interface ButtonProps {
  submit?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'regular' | 'large';
  variant?: 'primary' | 'secondary' | 'link' | 'danger' | 'ghost';
  children?: ReactNode;
}
