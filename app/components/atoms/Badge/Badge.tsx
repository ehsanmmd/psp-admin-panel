import { BadgeProps } from '@/app/components/atoms/Badge/types';
import { badgeStyles } from './styles';

export const Badge = ({ className, color, variant, children }: BadgeProps) => {
  return (
    <div
      className={`${badgeStyles({
        variant,
        color,
      })} ${className || ''}`}
    >
      {children}
    </div>
  );
};
