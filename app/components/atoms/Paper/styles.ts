import { paperLogoColorsEnum } from '@/app/components/atoms/Paper/types';
import { cva } from 'class-variance-authority';

export const logoStyles = cva(
  `w-12 h-12 rounded-[12px] flex items-center justify-center mb-10`,
  {
    variants: {
      color: {
        [paperLogoColorsEnum.PRIMARY]: 'bg-primary-600',
        [paperLogoColorsEnum.ERROR]: 'bg-error-600',
        [paperLogoColorsEnum.LINK]: 'bg-link-600',
        [paperLogoColorsEnum.SUCCESS]: 'bg-success-600',
        [paperLogoColorsEnum.WARNING]: 'bg-warning-600',
      },
    },
    defaultVariants: {
      color: paperLogoColorsEnum.PRIMARY,
    },
  },
);
