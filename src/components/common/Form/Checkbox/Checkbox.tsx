import React, { useState } from 'react';

import { CheckboxPropsType } from './types';

import './Checkbox.scss';

const Checkbox = ({ label, name = label, id, checked = true, onChange }: CheckboxPropsType) => {
  const [isChecked, setCheckedItems] = useState(checked);
  const handleChange = () => {
    setCheckedItems(isChecked ? false : true);
    onChange && onChange(id, isChecked ? false : true);
  };

  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="checkbox__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export { Checkbox };
