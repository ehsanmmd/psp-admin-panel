import { ReactNode } from 'react';

export interface TextInputProps {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  placeholder?: string;
  className?: string;
  label?: string;
  errorsMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
  handlePressEnter?: () => void;
}
