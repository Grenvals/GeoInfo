import React from 'react';

import './InputField.scss';

interface InputFieldPropsType {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputField = ({ label, type, value, placeholder, onChange }: InputFieldPropsType) => {
  return (
    <div className="inputField">
      <label className="inputField__label" htmlFor="login">
        {label}
      </label>
      <input
        className="inputField__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { InputField };
