import { ReactNode } from 'react';

export enum badgeVariantsEnum {
  'FILL' = 'fill',
  'OUTLINE' = 'outline',
}
export enum badgeColorsEnum {
  'NEUTRAL' = 'neutral',
  'SECONDARY' = 'secondary',
  'SUCCESS' = 'success',
}

export interface BadgeProps {
  className?: string;
  color?: badgeColorsEnum;
  variant?: badgeVariantsEnum;
  children?: ReactNode;
}
