import React from 'react';

import { useSelector } from 'react-redux';

import { Navbar } from '../common/Navbar/Navbar';
import { OptionsPanel } from '../common/OptionsPanel/OptionsPanel';
import { getIsMapActive } from '../../store/selectors/selectors';

import './Sidebar.scss';

const Sidebar = () => {
  const isMapActive = useSelector((state) => getIsMapActive(state));
  return (
    <div className="sidebar">
      <Navbar />
      {isMapActive && <OptionsPanel />}
    </div>
  );
};

export { Sidebar };
