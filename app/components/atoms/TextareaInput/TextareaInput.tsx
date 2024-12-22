import { ChangeEventHandler } from 'react';
import InputErrorMessage from '@/app/components/shared/InputErrorMessage';
export interface TextareaInputProps {
  placeholder?: string;
  value?: string;
  label?: string;
  name?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  handlePressEnter?: () => void;
}
export const TextareaInput = ({
  placeholder,
  value,
  onChange,
  name,
  label,
  errorMessage,
}: TextareaInputProps) => {
  return (
    <div>
      {label && (
        <h5 className="text-gray-700 text-sm !shadow-none font-semibold mb-[6px]">
          {label}
        </h5>
      )}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none min-h-[155px] focus:shadow-md resize-none ${!!errorMessage && 'border-red-500'}`}
        placeholder={placeholder}
      />
      {!!errorMessage && <InputErrorMessage message={errorMessage} />}
    </div>
  );
};
