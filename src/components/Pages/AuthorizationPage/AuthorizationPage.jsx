import React from 'react';

import './AuthorizationPage.scss';
import backgroundImg from '../../../assets/img/background-street.png';
import { Checkbox } from '../../common/Form/Checkbox/Checkbox';
import { Button } from '../../common/Button/Button';
import { LoginForm } from '../../common/Form/LoginForm/LoginForm';

const AuthorizationPage = () => {
  const handleSubmit = (login, password) => {
    alert(`Login: ${login}, Password: ${password}`);
  };
  return (
    <div className="authorization">
      <img src={backgroundImg} alt="bg" className="authorization__bg" />
      <div className="authorization__content">
        <h1 className="authorization__title">Login</h1>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export { AuthorizationPage };
