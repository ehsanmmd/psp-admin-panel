import { logoStyles } from './styles';
import { PaperProps } from '@/app/components/atoms/Paper/types';
import { Button } from '@/app/components/atoms/Button';
import { ArrowLeftIcon } from '@/app/components/icons/ArrowLeftIcon';

export const Paper = ({
  children,
  logo,
  logoColor,
  title,
  subtitle,
  buttonText,
  buttonAction,
  className,
}: PaperProps) => {
  return (
    <div
      className={`hover:bg-primary-100 flex flex-col items-center p-6 w-full border border-neutral-200 rounded-[18px] bg-white border-t-2 border-t-primary-600 ${className}`}
    >
      <div className={logoStyles({ color: logoColor })}>{logo}</div>
      {title && (
        <p className="text-center text-neutral-900 font-bold text-[22px] leading-[34px]">
          {title}
        </p>
      )}
      {subtitle && (
        <div className="rounded-[5px] mt-4 px-2 py-1 bg-primary-300">
          <p className="text-center text-primary-800 text-[14px] leading-[26px]">
            {subtitle}
          </p>
        </div>
      )}
      {buttonText && (
        <Button
          className={children ? 'my-6' : 'mt-[60px]'}
          suffixIcon={<ArrowLeftIcon />}
          fullWidth
          onClick={buttonAction}
        >
          {buttonText}
        </Button>
      )}
      {children && <div className="w-full">{children}</div>}
    </div>
  );
};
