import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './LeafletMap.scss';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/';

const LeafletMap = ({ initialSettings }) => {
  const mapRef = useRef();

  const center = [initialSettings.lat, initialSettings.lng];

  useEffect(() => {
    setInterval(() => {
      if (mapRef.current) {
        mapRef.current.leafletElement.invalidateSize();
      }
    }, 1000);
  }, [mapRef]);

  return (
    <div className="map">
      <Map zoom={initialSettings.zoom} center={center} ref={mapRef}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            <p>MainText</p>
            <p>MainText</p>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export { LeafletMap };
