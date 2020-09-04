import React from 'react';

import { Logo } from '../common/Logo/Logo';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export { Header };
