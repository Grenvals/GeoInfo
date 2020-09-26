import React from 'react';
import cn from 'classnames';

import { ButtonPropsType } from './types';

import './Button.scss';

const Button = ({ name = 'Submit', disabled = false, onClick, color }: ButtonPropsType) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div className="buttonWrap">
      <button
        className={cn('button', {
          ['button_white']: color === 'white',
        })}
        onClick={handleClick}
        disabled={disabled}>
        {name}
      </button>
    </div>
  );
};

export { Button };
