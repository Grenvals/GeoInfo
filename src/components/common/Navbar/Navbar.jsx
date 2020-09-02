import React from 'react';

import mapIcon from '../../../assets/img/nav/newspaper.svg';
import autorizationIcon from '../../../assets/img/nav/settings.svg';
import authorIcon from '../../../assets/img/nav/user.svg';
import { NavbarLink } from './NavbarLink/NavbarLink';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavbarLink
          link={'/authorization/'}
          linkIcon={autorizationIcon}
          title={'Authorization'}
        />
        <NavbarLink link={'/main/'} linkIcon={mapIcon} title={'Main page'} />
        <NavbarLink link={'/author/'} linkIcon={authorIcon} title={'About author'} />
      </ul>
    </nav>
  );
};

export { Navbar };
