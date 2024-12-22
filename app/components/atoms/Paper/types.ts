import { ReactNode } from 'react';

export enum paperLogoColorsEnum {
  'PRIMARY' = 'primary',
  'SUCCESS' = 'success',
  'ERROR' = 'error',
  'WARNING' = 'warning',
  'LINK' = 'link',
}

export interface PaperProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  logo?: ReactNode;
  logoColor?: paperLogoColorsEnum;
  buttonText?: string;
  buttonAction?: () => void;
  className?: string;
}
