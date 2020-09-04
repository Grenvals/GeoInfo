import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './OptionListBar.scss';
import { Checkbox } from '../Form/Checkbox/Checkbox';
import { getCategories } from '../../../store/selectors/selectors';
import { setCategoryStatus } from '../../../store/actions/actions';

const OptionListBar = () => {
  const categories = useSelector((state) => getCategories(state));
  const dispatch = useDispatch();

  const handleChange = (id, isActive) => {
    dispatch(setCategoryStatus(id, isActive));
  };

  const categoriesList = categories.map((c) => (
    <li className="OptionListBar__listItem" key={c.id}>
      <Checkbox
        id={c.id}
        name={c.name}
        label={c.name}
        checked={c.isActive}
        onChange={handleChange}
      />
    </li>
  ));
  return (
    <div className="OptionListBar">
      <h2 className="OptionListBar__title">Markers</h2>
      <ul className="OptionListBar__list">{categoriesList}</ul>
    </div>
  );
};

export { OptionListBar };
