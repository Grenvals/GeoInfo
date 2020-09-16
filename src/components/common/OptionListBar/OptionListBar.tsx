import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Checkbox } from '../Form/Checkbox/Checkbox';
import { getCategories } from '../../../store/selectors/selectors';
import { setCategoryStatus } from '../../../store/actions/actions';

import { CategoryType } from '../../../types/types';
import { RootStateType } from '../../../store/state/state';

import './OptionListBar.scss';

const OptionListBar = React.memo(() => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootStateType) => getCategories(state));

  const handleChange = useCallback((id: string, isActive: boolean) => {
    dispatch(setCategoryStatus(id, isActive));
  }, []);

  const categoriesList = categories.map((c: CategoryType) => (
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
      <h2 className="OptionListBar__title">Сategories</h2>
      <ul className="OptionListBar__list">{categoriesList}</ul>
    </div>
  );
});

export { OptionListBar };
