import { switchStyles } from './styles';
export const Switch = ({ value, onChange, label, disabled, icon }: any) => {
  return (
    <div onClick={onChange} className="w-max">
      <div className={switchStyles({ disabled, value })}>
        <div className="w-full h-[2px] bg-inherit absolute left-0" />
        <div className="rounded-full w-8 h-8 absolute left-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
      {label && <p className="p-2 text-neutral-800">{label}</p>}
    </div>
  );
};
