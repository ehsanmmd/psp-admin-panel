import { Controller, FieldValues } from 'react-hook-form';
import { BaseCheckBoxControllerProps } from '@/app/components/atoms/CheckBox/types';
import { BaseCheckBox } from '@/app/components/atoms/CheckBox/BaseCheckBox';

export function BaseCheckBoxController<T extends FieldValues>(
  props: BaseCheckBoxControllerProps<T>,
): JSX.Element {
  const { id, name, control, rules, disabled, label, showError, className } =
    props;
  return (
    <Controller
      name={name}
      control={control}
      disabled={disabled}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        return (
          <BaseCheckBox
            id={id}
            name={name}
            onChange={field.onChange}
            label={label}
            checked={Boolean(field.value)}
            error={error?.message}
            value={field.value}
            showError={showError}
            className={className}
            disabled={disabled}
          />
        );
      }}
    />
  );
}
