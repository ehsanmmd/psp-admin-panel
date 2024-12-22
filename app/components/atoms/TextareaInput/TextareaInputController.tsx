import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import { TextareaInput, TextareaInputProps } from './TextareaInput';

export interface TextareaInputController<T extends FieldValues>
  extends TextareaInputProps {
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: any;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export function TextareaInputController<T extends FieldValues>(
  props: TextareaInputController<T>,
) {
  const { name, rules, control, placeholder, defaultValue, label } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextareaInput
          value={field.value}
          onChange={field.onChange}
          placeholder={placeholder}
          errorMessage={error?.message}
          label={label}
        />
      )}
    />
  );
}
