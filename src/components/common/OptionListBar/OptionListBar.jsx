import React from 'react';

import './OptionListBar.scss';
import { Checkbox } from '../Form/Checkbox/Checkbox';

const OptionListBar = () => {
  const categoriesList = [
    { id: 1, name: 'pharmacies', isChecked: true },
    { id: 2, name: 'schools', isChecked: true },
    { id: 3, name: 'restaurants', isChecked: true },
  ];
  const categories = categoriesList.map((category) => (
    <li className="OptionListBar__listItem" key={category.id}>
      <Checkbox
        name={category.name}
        label={category.name}
        checked={category.isChecked}
        onChange={(name, isChecked) => {
          alert(name, isChecked);
        }}
      />
    </li>
  ));
  return (
    <div className="OptionListBar">
      <h2 className="OptionListBar__title">Options</h2>
      <ul className="OptionListBar__list">{categories}</ul>
    </div>
  );
};

export { OptionListBar };
