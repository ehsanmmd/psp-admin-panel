import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  `rounded-[6px] flex  items-center justify-center gap-1 transition-all`,
  {
    variants: {
      variant: {
        primary: `bg-primary-600 text-white [&_svg]:text-white [&_svg_path]:stroke-white
         hover:bg-primary-700
         active:bg-primary-800
         focus:bg-primary-600 focus:outline focus:outline-2 focus:outline-primary-400
         disabled:bg-neutral-200 disabled:text-neutral-600 [&_svg]:disabled:text-neutral-600 [&_svg_path]:disabled:stroke-neutral-600
         `,
        secondary: `bg-secondary-600 text-white [&_svg]:text-white [&_svg_path]:stroke-white
        hover:bg-secondary-700
        active:bg-secondary-400 active:text-secondary-900 [&_svg]:active:text-secondary-900 [&_svg_path]:active:stroke-secondary-900
        focus:bg-secondary-600 focus:outline focus:outline-2 focus:outline-secondary-400
        disabled:bg-neutral-200 disabled:text-neutral-600 [&_svg]:disabled:text-neutral-600 [&_svg_path]:disabled:stroke-neutral-600
        `,
        danger: `bg-error-600 text-white [&_svg]:text-white [&_svg_path]:stroke-white
        hover:bg-error-700
        active:bg-error-800
        focus:bg-error-600 focus:outline focus:outline-2 focus:outline-error-400
        disabled:bg-neutral-200 disabled:text-neutral-600 [&_svg]:disabled:text-neutral-600 [&_svg_path]:disabled:stroke-neutral-600
        `,
        ghost: `bg-transparent text-secondary-600 [&_svg]:text-secondary-600 [&_svg_path]:stroke-secondary-600
        hover:bg-secondary-200
        active:bg-secondary-500 active:text-secondary-900 [&_svg]:active:text-secondary-900 [&_svg_path]:active:stroke-secondary-900
        focus:bg-transparent focus:outline focus:outline-2 focus:outline-secondary-400 focus:text-secondary-600 [&_svg]:focus:text-secondary-600 [&_svg_path]:focus:stroke-secondary-600
        disabled:bg-transparent disabled:border-neutral-600 disabled:text-neutral-600 [&_svg]:disabled:text-neutral-600 [&_svg_path]:disabled:stroke-neutral-600
        `,
        link: `bg-transparent text-primary-600 border border-primary-600 [&_svg]:text-primary-600 [&_svg_path]:stroke-primary-600
        hover:bg-primary-700 hover:text-white [&_svg]:hover:text-white [&_svg_path]:hover:stroke-white
        active:bg-primary-800 active:text-white [&_svg]:active:text-white [&_svg_path]:active:stroke-white
        focus:bg-primary-600 focus:outline focus:outline-2 focus:outline-primary-400 focus:text-white [&_svg]:focus:text-white [&_svg_path]:focus:stroke-white
        disabled:bg-neutral-200 disabled:border-neutral-600 disabled:text-neutral-600 [&_svg]:disabled:text-neutral-600 [&_svg_path]:disabled:stroke-neutral-600
        `,
      },
      size: {
        small: 'p-[10px]',
        regular: 'p-[14px]',
        large: 'p-4',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular',
      fullWidth: false,
    },
  },
);
