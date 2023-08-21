import { FC } from "react";
import { KeyboardTypeOptions } from "react-native";
import { Controller, FieldError } from "react-hook-form";
import LibInput from "./Input";

type props = {
  name: string;
  control: any;
  rules: any;
  errors: FieldError | undefined;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  isMultiline?: boolean;
};

const LibFormInput: FC<props> = ({
  name,
  control,
  rules,
  errors,
  placeholder,
  type = "default",
  isMultiline = false,
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <LibInput
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type={type}
          isMultiline={isMultiline}
          hasErrors={!!errors}
        />
      )}
      name={name}
    />
  );
};

export default LibFormInput;
