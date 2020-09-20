import React, { useState } from 'react';

import { MapBGLayerType } from '../../../../types/types';

import './MapBGLayerOptions.scss';
import { Radio } from '../../Form/Radio/Radio';

interface MapBGLayerOptionsType {
  mapBGLayers: Array<MapBGLayerType>;
  setActiveMapBGLAyer(id: string): void;
}

const MapBGLayerOptions = ({ mapBGLayers, setActiveMapBGLAyer }: MapBGLayerOptionsType) => {
  console.log(mapBGLayers);
  const [isChecked, setCheckedItem] = useState('02');
  const handleChange = (id: string) => {
    setActiveMapBGLAyer(id);
    setCheckedItem(id);
  };

  const mapBGLayersList = mapBGLayers.map((l: MapBGLayerType) => (
    <li className="MapBGLayerOptions__listItem" key={l.id}>
      <Radio
        id={l.id}
        name={l.name}
        label={l.name}
        isChecked={isChecked === l.id}
        onChange={handleChange}
      />
    </li>
  ));

  return (
    <div className="MapBGLayerOptions">
      <h3 className="MapBGLayerOptions__subtitle">Map type</h3>
      <ul className="MapBGLayerOptions__list">{mapBGLayersList}</ul>
    </div>
  );
};

export { MapBGLayerOptions };
