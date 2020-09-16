import React from 'react';

import { Logo } from '../../common/Logo/Logo';

import './AuthorPage.scss';

const AuthorPage: React.FC = () => {
  return (
    <div className="author">
      <section className="author__content info">
        <Logo />
        <p className="info__version">Version 1.0.3</p>
        <h1 className="info__name">
          Made by
          <a className="info__link" href="http://grenvalz.kl.com.ua/">
            Valentyn Dubin
          </a>
        </h1>
        <a className="info__link" href="https://github.com/Grenvals/MapInfo">
          Repository on Github
        </a>
      </section>
    </div>
  );
};

export { AuthorPage };
