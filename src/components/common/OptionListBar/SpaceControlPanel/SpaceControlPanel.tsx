import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../../../store/state/state';
import { Checkbox } from '../../Form/Checkbox/Checkbox';

import {
  setISSStatus,
  setISSTrajectoryStatus,
  setISSVisibilityAreaStatus,
  setSatelitesCoverageStatus,
  setSatelitesVisibleStatus,
} from '../../../../store/actions/actions';
import {
  getInternationalSpaceStation,
  getSatelites,
  getSatelitesCount,
} from '../../../../store/selectors/selectors';

import ISSlogo from '../../../../assets/img/options/ISS_logo.png';
import Starlinklogo from '../../../../assets/img/options/starlink-spacex.png';

import './SpaceControlPanel.scss';

const SpaceControlPanel: React.FC = () => {
  const dispatch = useDispatch();

  const satelites = useSelector((state: RootStateType) => getSatelites(state));
  const satelitesCount = useSelector((state: RootStateType) => getSatelitesCount(state));
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

  const onChangeSatelitesVisibleStatus = useCallback((): void => {
    dispatch(setSatelitesVisibleStatus(satelites.isActive ? false : true));
  }, [satelites.isActive]);

  const onChangeSatelitesCoverageStatus = useCallback((): void => {
    dispatch(setSatelitesCoverageStatus(satelites.isCoverageActive ? false : true));
  }, [satelites.isCoverageActive]);

  return (
    <div className="spaceControlPanel">
      <h3 className="spaceControlPanel__subtitle">Starlink</h3>
      <div className="spaceControlPanel__img">
        <img src={Starlinklogo} alt="Starlink" />
      </div>
      <p className="spaceControlPanel__counter">
        Satelites on orbit:
        <span>{satelitesCount > 0 ? satelitesCount : '-'} </span>
      </p>
      <ul className="spaceControlPanel__list">
        <li className="spaceControlPanel__listItem">
          <Checkbox
            id={'01_ISS'}
            label={'Starlink satelites'}
            checked={satelites.isActive}
            onChange={onChangeSatelitesVisibleStatus}
          />
          <Checkbox
            id={'02_ISS'}
            label={'Starlink satelites coverage'}
            checked={internationalSpaceStation.isTrajectoryActive}
            onChange={onChangeSatelitesCoverageStatus}
          />
        </li>
      </ul>
      <h3 className="spaceControlPanel__subtitle">International space station</h3>
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
