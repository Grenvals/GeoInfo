import React from 'react';

import { LoginForm } from '../../common/Form/LoginForm/LoginForm';

import backgroundImg from '../../../assets/img/background-street.png';

import './AuthorizationPage.scss';

const AuthorizationPage: React.FC = () => {
  const handleSubmit = (login: string, password: string): void => {
    alert(`Login: ${login}, Password: ${password}`);
  };

  return (
    <div className="authorization">
      <img className="authorization__bg" src={backgroundImg} alt="bg" />
      <div className="authorization__content">
        <h1 className="authorization__title">Sign in</h1>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export { AuthorizationPage };
