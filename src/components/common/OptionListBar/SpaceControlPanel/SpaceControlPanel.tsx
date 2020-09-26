import React, { useCallback } from 'react';

import './SpaceControlPanel.scss';

import {
  setISSStatus,
  setISSTrajectoryStatus,
  setISSVisibilityAreaStatus,
} from '../../../../store/actions/actions';
import { getInternationalSpaceStation } from '../../../../store/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../../../store/state/state';
import { Checkbox } from '../../Form/Checkbox/Checkbox';

import ISSlogo from '../../../../assets/img/options/ISS_logo.png';

const SpaceControlPanel = () => {
  const dispatch = useDispatch();

  const internationalSpaceStation = useSelector((state: RootStateType) =>
    getInternationalSpaceStation(state)
  );

  const onChangeISSStatus = useCallback((): void => {
    dispatch(setISSStatus(internationalSpaceStation.isActive ? false : true));
  }, [internationalSpaceStation.isActive]);

  const onChangeISSTrajectoryStatus = useCallback((): void => {
    dispatch(setISSTrajectoryStatus(internationalSpaceStation.isTrajectoryActive ? false : true));
  }, [internationalSpaceStation.isTrajectoryActive]);

  const onChangeISSVisibilityAreaStatus = useCallback((): void => {
    dispatch(
      setISSVisibilityAreaStatus(internationalSpaceStation.isVisibilityAreaActive ? false : true)
    );
  }, [internationalSpaceStation.isVisibilityAreaActive]);

  return (
    <div className="spaceControlPanel">
      <h3 className="spaceControlPanel__subtitle">SPACE</h3>
      <div className="spaceControlPanel__img">
        <img src={ISSlogo} alt="ISS" />
      </div>
      <ul className="spaceControlPanel__list">
        <li className="spaceControlPanel__listItem">
          <Checkbox
            id={'01_ISS'}
            label={internationalSpaceStation.name}
            checked={internationalSpaceStation.isActive}
            onChange={onChangeISSStatus}
          />
          <Checkbox
            id={'02_ISS'}
            label={'ISS trajectory path'}
            checked={internationalSpaceStation.isTrajectoryActive}
            onChange={onChangeISSTrajectoryStatus}
          />
          <Checkbox
            id={'03_ISS'}
            label={'ISS visibility area from ground'}
            checked={internationalSpaceStation.isVisibilityAreaActive}
            onChange={onChangeISSVisibilityAreaStatus}
          />
        </li>
      </ul>
    </div>
  );
};

export { SpaceControlPanel };
