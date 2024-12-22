import { BaseCheckBoxProps } from '@/app/components/atoms/CheckBox/types';
import InputErrorMessage from '@/app/components/shared/InputErrorMessage';

export function BaseCheckBox(props: BaseCheckBoxProps): JSX.Element {
  const {
    name,
    id,
    label,
    className,
    checked,
    error,
    disabled,
    value,
    onChange,
  } = props;

  return (
    <div className={`flex gap-2 items-center ${className ?? ''}`}>
      <div className="inline-flex items-center relative">
        <input
          id={id}
          type="checkbox"
          name={name}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          value={value}
        />
      </div>

      <div className="flex-col">
        {label && (
          <label
            htmlFor={id}
            className="text-sm text-gray-600 cursor-pointer ms-2"
          >
            {label}
          </label>
        )}

        <div className="block h-50">
          {!!error && <InputErrorMessage message={error} />}
        </div>
      </div>
    </div>
  );
}
