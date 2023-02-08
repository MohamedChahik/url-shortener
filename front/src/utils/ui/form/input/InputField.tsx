import React, { ChangeEvent, FC } from "react";

type InputType = "text" | "email" | "password";

type InputFieldProps = {
  id: string;
  label: string;
  type: InputType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

export const InputField: FC<InputFieldProps> = ({
  id,
  label,
  type,
  onChange,
  value,
  name,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};
