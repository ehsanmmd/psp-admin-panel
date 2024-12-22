import { cva } from 'class-variance-authority';

export const switchStyles = cva(
  `w-[120px] h-8 [&>div:nth-child(2)]:transition-all relative [&>div:nth-child(1)]:bg-primary-600 [&>div:nth-child(2)_svg]:disabled:text-primary-600 [&>div:nth-child(2)_svg_path]:disabled:stroke-primary-600
    flex items-center
    `,
  {
    variants: {
      disabled: {
        true: 'bg-neutral-400 [&>div:nth-child(2)>svg]:disabled:text-neutral-400 [&>div:nth-child(2)>svg_path]:disabled:stroke-neutral-400',
      },
      value: {
        true: '[&>div:nth-child(2)]:right-0 [&>div:nth-child(2)]:bg-primary-600',
        false: `[&>div:nth-child(1)]:bg-neutral-400 [&>div:nth-child(2)_svg]:disabled:text-neutral-400 [&>div:nth-child(2)_svg_path]:disabled:stroke-neutral-400
                 [&>div:nth-child(2)]:right-[102px] [&>div:nth-child(2)]:border-[2px] [&>div:nth-child(2)]:border-neutral-400 [&>div:nth-child(2)]:bg-white`,
      },
    },
    defaultVariants: {
      disabled: false,
      value: true,
    },
  },
);
