import {
  badgeColorsEnum,
  badgeVariantsEnum,
} from '@/app/components/atoms/Badge/types';
import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  `rounded-[8px] leading-[24px] px-2 py-1 w-max text-[14px]`,
  {
    variants: {
      variant: {
        [badgeVariantsEnum.FILL]: `!border-0`,
        [badgeVariantsEnum.OUTLINE]: `border !bg-transparent`,
      },
      color: {
        [badgeColorsEnum.NEUTRAL]:
          'text-neutral-700 border-neutral-300 bg-neutral-100',
        [badgeColorsEnum.SECONDARY]:
          'text-secondary-700 border-secondary-400 bg-secondary-100',
        [badgeColorsEnum.SUCCESS]:
          'text-success-700 border-success-500 bg-success-200',
      },
    },
    defaultVariants: {
      variant: badgeVariantsEnum.FILL,
      color: badgeColorsEnum.NEUTRAL,
    },
  },
);
