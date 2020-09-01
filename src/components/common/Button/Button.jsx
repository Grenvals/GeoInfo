import React from 'react';

import cn from 'classnames';

import './Button.scss';

const Button = ({ className, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div className={cn('buttonWrap', { [className]: className })}>
      <button className="button" onClick={handleClick}></button>
    </div>
  );
};

export { Button };
