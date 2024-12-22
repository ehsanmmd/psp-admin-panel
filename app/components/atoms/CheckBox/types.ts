import { ChangeEvent } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export interface BaseCheckBoxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  error?: string;
  value?: string | number | readonly string[];
  showError?: boolean;
  disabled?: boolean;
}

export interface BaseCheckBoxControllerProps<T extends FieldValues>
  extends Omit<BaseCheckBoxProps, 'onChange' | 'checked' | 'error' | 'value'> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
}