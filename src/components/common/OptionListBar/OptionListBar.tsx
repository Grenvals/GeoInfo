import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CheckboxesGroup } from '../Form/CheckboxesGroup/CheckboxesGroup';

import { getCategories, getMapBGLayers, getMapLayers } from '../../../store/selectors/selectors';
import {
  setCategoryStatus,
  setCurrentMapBGLayer,
  setMapLayerStatus,
} from '../../../store/actions/actions';

import { RootStateType } from '../../../store/state/state';

import './OptionListBar.scss';
import { RadiobuttonsGroup } from '../Form/RadiobuttonsGroup/RadiobuttonsGroup';
import { Scrollbars } from 'react-custom-scrollbars';
import { SpaceControlPanel } from './SpaceControlPanel/SpaceControlPanel';

const OptionListBar = () => {
  const dispatch = useDispatch();
  const markersCategories = useSelector((state: RootStateType) => getCategories(state));
  const mapBGLayers = useSelector((state: RootStateType) => getMapBGLayers(state));
  const mapLayers = useSelector((state: RootStateType) => getMapLayers(state));

  const onChangeCategoryStatus = useCallback((id: string, isActive: boolean) => {
    dispatch(setCategoryStatus(id, isActive));
  }, []);

  const onChangeMapLayerStatus = useCallback((id: string, isActive: boolean) => {
    dispatch(setMapLayerStatus(id, isActive));
  }, []);

  const setActiveMapBGLAyer = useCallback((id: string): void => {
    dispatch(setCurrentMapBGLayer(id));
  }, []);

  return (
    <div className="OptionListBar">
      <h2 className="OptionListBar__title">Options</h2>
      <div className="OptionListBar__wrap">
        <Scrollbars autoHeightMin={`100%`} autoHide autoHideTimeout={1000} autoHideDuration={400}>
          <RadiobuttonsGroup
            title="Maps"
            radiobuttonsList={mapBGLayers}
            onChange={setActiveMapBGLAyer}
          />
          <CheckboxesGroup
            title="Layers"
            checkboxesList={mapLayers}
            onChange={onChangeMapLayerStatus}
          />
          <CheckboxesGroup
            title="Markers"
            checkboxesList={markersCategories}
            onChange={onChangeCategoryStatus}
          />
          <SpaceControlPanel />
        </Scrollbars>
      </div>
    </div>
  );
};

export { OptionListBar };
