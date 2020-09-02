import React from 'react';

import './Sidebar.scss';
import { Navbar } from '../common/Navbar/Navbar';
import { OptionListBar } from '../common/OptionListBar/OptionListBar';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <OptionListBar />
    </div>
  );
};

export { Sidebar };
