import React, { useState } from 'react';
import cn from 'classnames';

import { OptionListBar } from '../../common/OptionListBar/OptionListBar';

import './OptionsPanel.scss';

const OptionsPanel = () => {
  const [isPanelActive, setIsPanelActive] = useState(false);

  const handleClick = () => {
    setIsPanelActive(isPanelActive ? false : true);
  };

  return (
    <div
      className={cn('optionsPanel', {
        ['optionsPanel_active']: isPanelActive,
      })}>
      <OptionListBar />
      <button
        className={cn('optionsPanel__btn', {
          ['optionsPanel__btn_active']: isPanelActive,
        })}
        onClick={handleClick}
        type="button"></button>
    </div>
  );
};

export { OptionsPanel };
