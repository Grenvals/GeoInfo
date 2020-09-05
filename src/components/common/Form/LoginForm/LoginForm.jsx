import React, { useState } from 'react';

import { Button } from '../../Button/Button';

import './LoginForm.scss';

const LoginForm = ({ onSubmit }) => {
  const [error, setError] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setError(false);
    setLogin('');
    setPassword('');
  };

  const required = (element) => {
    return element === '';
  };

  const maxLength = (element, value) => {
    return element.length > value;
  };

  const minLength = (element, value) => {
    return element.length < value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (required(login) || required(password)) {
      setError('Fields cant be blank!');
    } else if (minLength(login, 10) || maxLength(password, 40)) {
      setError('Min length is 10');
    } else if (minLength(login, 10) || maxLength(password, 40)) {
      setError('Max length is 40');
    } else {
      onSubmit(login, password);
      resetForm();
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div className="loginForm__item">
        <label className="loginForm__label" htmlFor="login">
          User email
        </label>
        <input
          className="loginForm__input"
          type="text"
          placeholder="Login"
          name="user_login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="loginForm__item">
        <label className="loginForm__label" htmlFor="password">
          Password
        </label>
        <input
          className="loginForm__input"
          type="password"
          name="user_password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="loginForm__buttonItem">
        {error !== false && <span className="loginForm__error">{error}</span>}
        <Button name="Login" />
      </div>
    </form>
  );
};

export { LoginForm };
