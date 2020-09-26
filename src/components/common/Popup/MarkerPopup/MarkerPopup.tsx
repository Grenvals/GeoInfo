import React from 'react';
import cn from 'classnames';

import { Popup } from 'react-leaflet';

import { MarkerPopupType } from './types';

import './MarkerPopup.scss';

const MarkerPopup = ({
  name,
  version,
  launch,
  orbit,
  velocity,
  height,
  latlng,
  image,
  imageSize,
}: MarkerPopupType) => {
  return (
    <Popup>
      <div className="markerPopup">
        <div
          className={cn('markerPopup__img', {
            ['markerPopup__img_contain']: imageSize === 'contain',
          })}>
          <img src={image} alt="icon" />
        </div>
        <h3 className="markerPopup__name">{name}</h3>
        <div className="markerPopup__content">
          {version && (
            <p className="markerPopup__info">
              Version:<span> {version}</span>
            </p>
          )}
          {launch && (
            <p className="markerPopup__info">
              Launch:<span> {launch}</span>
            </p>
          )}
          {orbit && (
            <p className="markerPopup__info">
              Orbit:<span> {orbit}</span>
            </p>
          )}
          {velocity && (
            <p className="markerPopup__info">
              Velocity:<span> {`${velocity} km/s`}</span>
            </p>
          )}
          {height && (
            <p className="markerPopup__info">
              Height:<span> {`${height} km`}</span>
            </p>
          )}
          <p className="markerPopup__info">
            latitude:<span> {latlng.lat}</span>
          </p>
          <p className="markerPopup__info">
            longitude:<span> {latlng.lng}</span>
          </p>
        </div>
      </div>
    </Popup>
  );
};

export { MarkerPopup };
