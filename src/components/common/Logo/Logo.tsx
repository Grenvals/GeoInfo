import React from 'react';

import './Logo.scss';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <h1 className="logo__text">
        Map<span>Info</span>
      </h1>
    </div>
  );
};

export { Logo };
