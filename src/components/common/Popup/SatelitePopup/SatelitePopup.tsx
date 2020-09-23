import React from 'react';
import { Popup } from 'react-leaflet';

import { LatIngType } from '../../../../types/types';

import './SatelitePopup.scss';

type SatelitePopupType = {
  name: string,
  version: string,
  launch: string,
  orbit: string,
  velocity: number,
  height: number,
  latlng: LatIngType,
  image: string,
};

const SatelitePopup = ({
  name,
  version,
  launch,
  orbit,
  velocity,
  height,
  latlng,
  image,
}: SatelitePopupType) => {
  return (
    <Popup>
      <div className="satelitePopup">
        <div className="satelitePopup__img">
          <img src={image} alt="icon" />
        </div>
        <h3 className="satelitePopup__name">{name}</h3>
        <div className="satelitePopup__content">
          <p className="satelitePopup__info">
            Version:<span> {version}</span>
          </p>
          <p className="satelitePopup__info">
            Launch:<span> {launch}</span>
          </p>
          <p className="satelitePopup__info">
            Orbit:<span> {orbit}</span>
          </p>
          <p className="satelitePopup__info">
            Velocity:<span> {`${velocity} km/s`}</span>
          </p>
          <p className="satelitePopup__info">
            Height:<span> {`${height} km`}</span>
          </p>
          <p className="satelitePopup__info">
            latitude:<span> {latlng.lat}</span>
          </p>
          <p className="satelitePopup__info">
            longitude:<span> {latlng.lng}</span>
          </p>
        </div>
      </div>
    </Popup>
  );
};

export { SatelitePopup };
