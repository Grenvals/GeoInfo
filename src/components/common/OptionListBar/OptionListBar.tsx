import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CheckboxesGroup } from '../Form/CheckboxesGroup/CheckboxesGroup';

import { getCategories, getMapBGLayers } from '../../../store/selectors/selectors';
import { setCategoryStatus, setCurrentMapBGLayer } from '../../../store/actions/actions';

import { RootStateType } from '../../../store/state/state';

import './OptionListBar.scss';
import { RadiobuttonsGroup } from '../Form/RadiobuttonsGroup/RadiobuttonsGroup';

const OptionListBar = React.memo(() => {
  const dispatch = useDispatch();
  const markersCategories = useSelector((state: RootStateType) => getCategories(state));
  const mapBGLayers = useSelector((state: RootStateType) => getMapBGLayers(state));

  const onChangeCategoryStatus = useCallback((id: string, isActive: boolean) => {
    dispatch(setCategoryStatus(id, isActive));
  }, []);

  const setActiveMapBGLAyer = useCallback((id: string): void => {
    dispatch(setCurrentMapBGLayer(id));
  }, []);

  return (
    <div className="OptionListBar">
      <h2 className="OptionListBar__title">Options</h2>
      <div className="OptionListBar__wrap">
        <RadiobuttonsGroup
          title="Map type"
          radiobuttonsList={mapBGLayers}
          onChange={setActiveMapBGLAyer}
        />
        <CheckboxesGroup
          title="Markers"
          checkboxesList={markersCategories}
          onChange={onChangeCategoryStatus}
        />
      </div>
    </div>
  );
});

export { OptionListBar };
