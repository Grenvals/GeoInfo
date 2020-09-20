import React from 'react';

import { MapBGLayerType } from '../../../../types/types';

import './RadiobuttonsGroup.scss';

import { Radio } from '../../Form/Radio/Radio';

interface MapBGLayerOptionsType {
  title: string;
  radiobuttonsList: Array<MapBGLayerType>;
  onChange(id: string): void;
}

const RadiobuttonsGroup = ({ title, radiobuttonsList, onChange }: MapBGLayerOptionsType) => {
  const handleChange = (id: string) => {
    onChange(id);
  };

  const radiobuttons = radiobuttonsList.map((l: MapBGLayerType) => (
    <li className="RadiobuttonsGroup__listItem" key={l.id}>
      <Radio
        id={l.id}
        name={l.name}
        label={l.name}
        isChecked={l.isActive}
        onChange={handleChange}
      />
    </li>
  ));

  return (
    <div className="RadiobuttonsGroup">
      <h3 className="RadiobuttonsGroup__subtitle">{title}</h3>
      <ul className="RadiobuttonsGroup__list">{radiobuttons}</ul>
    </div>
  );
};

export { RadiobuttonsGroup };
