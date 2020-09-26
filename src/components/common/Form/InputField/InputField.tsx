import React from 'react';

import { InputFieldPropsType } from './types';

import './InputField.scss';

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
