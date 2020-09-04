import React from 'react';

import { useSelector } from 'react-redux';

import { Navbar } from '../common/Navbar/Navbar';

import { OptionListBar } from '../common/OptionListBar/OptionListBar';
import { getIsMapActive } from '../../store/selectors/selectors';

import './Sidebar.scss';

const Sidebar = () => {
  const isMapActive = useSelector((state) => getIsMapActive(state));

  return (
    <div className="sidebar">
      <Navbar />
      {isMapActive && <OptionListBar />}
    </div>
  );
};

export { Sidebar };
