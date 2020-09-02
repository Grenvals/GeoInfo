import React, { useState } from 'react';

import './Checkbox.scss';

const Checkbox = ({ name, cheked = false, onChange }) => {
  const [isChecked, setCheckedItems] = useState(false);
  const handleChange = () => {
    setCheckedItems(isChecked ? false : true);
    onChange && onChange(name, isChecked);
  };
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onClick={handleChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export { Checkbox };
