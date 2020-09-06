import React from 'react';

import './Button.scss';

const Button = ({ name = 'Submit', onClick, disabled = false }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div className="buttonWrap">
      <button className="button" onClick={handleClick} disabled={disabled}>
        {name}
      </button>
    </div>
  );
};

export { Button };
