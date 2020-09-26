import React from 'react';

import { NavbarLink } from './NavbarLink/NavbarLink';

import mapIcon from '../../../assets/img/nav/newspaper.svg';
import autorizationIcon from '../../../assets/img/nav/settings.svg';
import authorIcon from '../../../assets/img/nav/user.svg';

import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavbarLink link={'/authorization/'} linkIcon={autorizationIcon} title={'Sign in'} />
        <NavbarLink link={'/main/'} linkIcon={mapIcon} title={'Map'} />
        <NavbarLink link={'/author/'} linkIcon={authorIcon} title={'About'} />
      </ul>
    </nav>
  );
};

export { Navbar };
