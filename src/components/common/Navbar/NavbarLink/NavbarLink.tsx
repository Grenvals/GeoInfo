import React from 'react';

import { NavLink } from 'react-router-dom';

import { NavbarLinkProps } from './types';

import './NavbarLink.scss';

const NavbarLink = ({ title, link, linkIcon }: NavbarLinkProps) => {
  return (
    <li className="navbarLink">
      <NavLink to={link} className="navbarLink__link" activeClassName="navbarLink__link_active">
        <img className="navbarLink__img" src={linkIcon} alt="link icon" />
        <h3 className="navbarLink__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export { NavbarLink };
