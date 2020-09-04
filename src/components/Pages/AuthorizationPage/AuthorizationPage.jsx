import React from 'react';

import { Checkbox } from '../../common/Form/Checkbox/Checkbox';
import { Button } from '../../common/Button/Button';
import { LoginForm } from '../../common/Form/LoginForm/LoginForm';

import backgroundImg from '../../../assets/img/background-street.png';

import './AuthorizationPage.scss';

const AuthorizationPage = () => {
  const handleSubmit = (login, password) => {
    alert(`Login: ${login}, Password: ${password}`);
  };

  return (
    <div className="authorization">
      <img className="authorization__bg" src={backgroundImg} alt="bg" />
      <div className="authorization__content">
        <h1 className="authorization__title">Login</h1>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export { AuthorizationPage };
