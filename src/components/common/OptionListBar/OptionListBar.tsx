import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Checkbox } from '../Form/Checkbox/Checkbox';
import { getCategories, getMapBGLayers } from '../../../store/selectors/selectors';
import { setCategoryStatus, setCurrentMapBGLayer } from '../../../store/actions/actions';

import { CategoryType } from '../../../types/types';
import { RootStateType } from '../../../store/state/state';

import './OptionListBar.scss';
import { MapBGLayerOptions } from './MapBGLayerOptions/MapBGLayerOptions';

const OptionListBar = React.memo(() => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootStateType) => getCategories(state));
  const mapBGLayers = useSelector((state: RootStateType) => getMapBGLayers(state));

  const handleChange = useCallback((id: string, isActive: boolean) => {
    dispatch(setCategoryStatus(id, isActive));
  }, []);

  const setActiveMapBGLAyer = useCallback((id: string): void => {
    dispatch(setCurrentMapBGLayer(id));
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
      <h2 className="OptionListBar__title">Options</h2>
      <h3 className="OptionListBar__subtitle">Сategories</h3>
      <ul className="OptionListBar__list">{categoriesList}</ul>
      <MapBGLayerOptions mapBGLayers={mapBGLayers} setActiveMapBGLAyer={setActiveMapBGLAyer} />
    </div>
  );
});

export { OptionListBar };
