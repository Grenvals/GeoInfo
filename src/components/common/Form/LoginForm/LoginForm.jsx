import React, { useState, useEffect } from 'react';

import { Button } from '../../Button/Button';

import './LoginForm.scss';
import { required, maxLength, minLength } from '../../../../utils/validators';
import { InputField } from '../InputField/InputField';

const LoginForm = ({ onSubmit }) => {
  const [isValidationActive, setIsValidationActive] = useState(false);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setLogin('');
    setPassword('');
    setError(false);
    setIsValidationActive(false);
  };

  const formValidation = () => {
    if (required(login) || required(password)) {
      setError('Fields cant be blank!');
    } else if (minLength(login, 10) || minLength(password, 10)) {
      setError('Min length is 10');
    } else if (maxLength(login, 40) || maxLength(password, 40)) {
      setError('Max length is 40');
    } else {
      setError(false);
      return true;
    }
  };

  useEffect(() => {
    if (isValidationActive) {
      formValidation();
    }
  }, [isValidationActive, login, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValidation() === true) {
      onSubmit(login, password);
      resetForm();
    } else {
      setIsValidationActive(true);
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <InputField
        label="Login"
        type="text"
        value={login}
        placeholder="Login"
        onChange={(e) => setLogin(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        placeholder="******"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="loginForm__buttonItem">
        {error !== false && <span className="loginForm__error">{error}</span>}
        <Button name="Login" />
      </div>
    </form>
  );
};

export { LoginForm };
