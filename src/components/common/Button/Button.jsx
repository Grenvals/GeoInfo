import React from 'react';

import './Button.scss';

const Button = ({ name = 'Submit', onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div className="buttonWrap">
      <button className="button" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};

export { Button };
