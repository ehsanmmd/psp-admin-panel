import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { FocusEventHandler, KeyboardEvent } from 'react';
import { TextInput } from '@/app/components/atoms/TextInput';
import { TextInputProps } from '@/app/components/atoms/TextInput/types';
export interface TextInputControllerProps<T extends FieldValues>
  extends TextInputProps {
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: any;
  disabled?: boolean;
  className?: string;
  onPressEnter?: (e?: KeyboardEvent<HTMLInputElement>) => void;
  inputType?: HTMLInputElement['type'];
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}
export function TextInputController<T extends FieldValues>(
  props: TextInputControllerProps<T>,
) {
  const {
    name,
    rules,
    control,
    placeholder,
    defaultValue,
    suffixIcon,
    prefixIcon,
    label,
    handlePressEnter,
  } = props;
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          value={field.value}
          onChange={field.onChange}
          placeholder={placeholder}
          handlePressEnter={handlePressEnter}
          suffixIcon={suffixIcon}
          prefixIcon={prefixIcon}
          errorsMessage={error?.message}
          label={label}
        />
      )}
    />
  );
}
