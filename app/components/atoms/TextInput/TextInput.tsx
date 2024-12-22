import { TextInputProps } from '@/app/components/atoms/TextInput/types';
import InputErrorMessage from '@/app/components/shared/InputErrorMessage';

export const TextInput = ({
  prefixIcon,
  suffixIcon,
  placeholder,
  value,
  onChange,
  label,
  errorsMessage,
  handlePressEnter,
}: TextInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handlePressEnter?.();
    }
  };
  return (
    <div className="w-full">
      {label && (
        <h5 className="text-gray-700 text-sm font-semibold mb-[6px]">
          {label}
        </h5>
      )}
      <div
        className={`flex justify-between gap-2 items-center w-full bg-white rounded-[8px] py-3 px-4  ${!!errorsMessage && 'border border-red-500 border-solid'}`}
      >
        {prefixIcon}
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className={`h-6 !shadow-none !outline-none !border-none w-full`}
          autoFocus
          onKeyDownCapture={handleKeyDown}
        />
        {suffixIcon}
      </div>
      {!!errorsMessage && <InputErrorMessage message={errorsMessage} />}
    </div>
  );
};

// <div className="w-full">

//   <input
//     {...register('name', {
//       required: errorEmpty,
//       pattern: {
//         value: regexPersianAndEnglishChar,
//         message: errorName,
//       },
//       maxLength: { value: 50, message: errorMax },
//     })}
//     type="text"
//     className={`border rounded-lg p-3 text-sm text-gray2-500 w-full focus:outline-none focus:shadow-md ${errors?.name && 'border-red-500'}`}
//     placeholder={nameInputPlaceholder}
//   />
//   {errors.name?.message && (
//     <InputErrorMessage message={errors.name?.message} />
//   )}
// </div>
