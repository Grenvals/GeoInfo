import React, { useCallback } from 'react';

import './SpaceControlPanel.scss';

import { setISSStatus } from '../../../../store/actions/actions';
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
            name={internationalSpaceStation.name}
            label={internationalSpaceStation.name}
            checked={internationalSpaceStation.isActive}
            onChange={onChangeISSStatus}
          />
        </li>
      </ul>
    </div>
  );
};

export { SpaceControlPanel };
