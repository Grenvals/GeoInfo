import React, { useState } from 'react';
import cn from 'classnames';

import { OptionListBar } from '../../common/OptionListBar/OptionListBar';

import './OptionsPanel.scss';

const OptionsPanel: React.FC = () => {
  const [isPanelActive, setIsPanelActive] = useState<boolean>(false);

  const handleClick = (): void => {
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
