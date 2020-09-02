import React from 'react';

import './OptionListBar.scss';
import { Checkbox } from '../Form/Checkbox/Checkbox';

const OptionListBar = () => {
  const categoriesList = [
    { name: 'pharmacies', isChecked: true },
    { name: 'schools', isChecked: true },
    { name: 'restaurants', isChecked: true },
  ];
  const categories = categoriesList.map((category) => (
    <Checkbox
      name={category.name}
      cheked={category.isChecked}
      onChange={(name, isChecked) => {
        alert(name, isChecked);
      }}
    />
  ));
  return (
    <div className="OptionListBar">
      <h2 className="OptionListBar__title">Options</h2>
      <ul className="OptionListBar__list">{categories}</ul>
    </div>
  );
};

export { OptionListBar };
