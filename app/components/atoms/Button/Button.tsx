import React from 'react';

import { ButtonProps } from './types';
import { LoadingSvg } from '@/app/components/atoms/Svgs/LoadingSvg';
import { buttonStyles } from './styles';

export function Button({
  onClick,
  submit,
  fullWidth,
  className,
  prefixIcon,
  suffixIcon,
  disabled,
  size,
  variant,
  loading,
  children,
}: ButtonProps) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonStyles({
        variant,
        fullWidth,
        size,
      })} ${className || ''}`}
    >
      {prefixIcon && !loading && prefixIcon}
      <div>{loading ? <LoadingSvg /> : children}</div>
      {suffixIcon && !loading && suffixIcon}
    </button>
  );
}
