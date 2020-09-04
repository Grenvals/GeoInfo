import React, { useState } from 'react';

import './Checkbox.scss';

const Checkbox = ({ name, label, id, checked = true, onChange }) => {
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
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export { Checkbox };
