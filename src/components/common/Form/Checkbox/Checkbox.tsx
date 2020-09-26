import React, { useState } from 'react';

import './Checkbox.scss';

interface CheckboxPropsType {
  name?: string;
  label: string;
  id: string;
  checked: boolean;
  onChange(id: string, isChecked: boolean): void;
}

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
