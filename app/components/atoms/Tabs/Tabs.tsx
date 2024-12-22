import { TabsProps } from '@/app/components/atoms/Tabs/types';

export const Tabs = ({ className, items, handleClick, value }: TabsProps) => {
  return (
    <div className={`max-md:px-0 ${className}`}>
      <div className="max-md:overflow-scroll bg-neutral-50 w-full p-[6px] rounded-[8px] flex items-center gap-4">
        {items.map((item) => (
          <div
            onClick={() => handleClick(item)}
            key={item.value}
            className={`max-md:w-max max-md:min-w-max cursor-pointer text-[14px] px-[14px] py-[10px] rounded-[6px] ${value?.value === item.value ? 'text-primary-600 bg-white' : 'text-surface-600'}`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
