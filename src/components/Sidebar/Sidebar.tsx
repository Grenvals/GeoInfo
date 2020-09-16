import React from 'react';

import { useSelector } from 'react-redux';

import { Navbar } from '../common/Navbar/Navbar';
import { OptionsPanel } from '../common/OptionsPanel/OptionsPanel';
import { getIsMapActive } from '../../store/selectors/selectors';
import { RootStateType } from '../../store/state/state';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const isMapActive = useSelector((state: RootStateType) => getIsMapActive(state));

  return (
    <div className="sidebar">
      <Navbar />
      {isMapActive && <OptionsPanel />}
    </div>
  );
};

export { Sidebar };
