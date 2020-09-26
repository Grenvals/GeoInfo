import React, { useState, useEffect } from 'react';

import { Button } from '../../Button/Button';
import { InputField } from '../InputField/InputField';

import { required, maxLength, minLength } from '../../../../utils/validators';
import { LoginFormPropsType } from './types';

import './LoginForm.scss';

const LoginForm = ({ onSubmit }: LoginFormPropsType) => {
  const [isValidationActive, setIsValidationActive] = useState<boolean>(false);
  const [error, setError] = useState<false | string>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const resetForm = (): void => {
    setLogin('');
    setPassword('');
    setError(false);
    setIsValidationActive(false);
  };

  const formValidation = (): void | true => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setLogin(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        placeholder="******"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
      />
      <div className="loginForm__buttonItem">
        {error !== false && <span className="loginForm__error">{error}</span>}
        <Button name="Login" />
      </div>
    </form>
  );
};

export { LoginForm };
