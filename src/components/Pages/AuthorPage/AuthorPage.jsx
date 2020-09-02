import React from 'react';

import './AuthorPage.scss';
import { Logo } from '../../common/Logo/Logo';

const AuthorPage = () => {
  return (
    <div className="author">
      <section className="author__content info">
        <Logo />
        <p className="info__version">Version 1.0.3</p>
        <h1 className="info__name">
          Made by
          <a href="http://grenvalz.kl.com.ua/" className="info__link">
            Valentyn Dubin
          </a>
        </h1>
        <a href="https://github.com/Grenvals/MapInfo" className="info__link">
          Repository on Github
        </a>
      </section>
    </div>
  );
};

export { AuthorPage };
