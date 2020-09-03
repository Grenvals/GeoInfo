import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './MapPage.scss';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/';

const MapPage = () => {
  const mapRef = useRef();
  useEffect(() => {
    setInterval(() => {
      if (mapRef.current) {
        mapRef.current.leafletElement.invalidateSize();
      }
    }, 1000);
  }, [mapRef]);

  const state = {
    lat: 50.440864,
    lng: 30.515664,
    zoom: 10,
  };

  const center = [state.lat, state.lng];

  return (
    <div className="map">
      <Map zoom={state.zoom} center={center} ref={mapRef}>
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

export { MapPage };
