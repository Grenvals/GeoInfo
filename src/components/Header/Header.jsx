import React from 'react';

import './Header.scss';
import { Logo } from '../common/Logo/Logo';

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
