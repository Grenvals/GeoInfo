import React from 'react';
import cn from 'classnames';

import './Button.scss';

interface ButtonPropsType {
  name?: string,
  disabled?: boolean,
  color?: string,
  onClick?():void,
}

const Button = ({ name = 'Submit', onClick, disabled = false, color }: ButtonPropsType) => {
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
