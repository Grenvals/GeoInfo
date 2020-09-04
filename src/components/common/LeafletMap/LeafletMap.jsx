import React, { useRef, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';

import { Button } from '../Button/Button';

import {
  greenMarker,
  redMarker,
  currentLocationMarker,
} from '../../../store/constants/leafletMarkers';

import currentLocationIcon from '../../../assets/img/markers/home-marker.svg';

import './LeafletMap.scss';

const LeafletMap = ({ initialSettings, markers, onAddMarker }) => {
  const { Overlay } = LayersControl;
  const mapRef = useRef();
  const center = [initialSettings.lat, initialSettings.lng];
  const [unsaveMarkers, setUnsaveMarkers] = useState([]);

  useEffect(() => {
    setInterval(() => {
      if (mapRef.current) {
        mapRef.current.leafletElement.invalidateSize();
      }
    }, 1000);
  }, [mapRef]);

  const markersList = markers.map((marker) => (
    <Marker
      key={marker.id}
      position={[marker.latlng.lat, marker.latlng.lng]}
      icon={greenMarker}
      openPopup={true}>
      <Popup>
        <div className="markerPopup">
          <h3 className="markerPopup__name">{marker.name}</h3>
        </div>
      </Popup>
    </Marker>
  ));

  const unsaveMarkersList = unsaveMarkers.map((marker) => (
    <Marker
      key={marker.id}
      position={[marker.latlng.lat, marker.latlng.lng]}
      icon={redMarker}
      openPopup={true}>
      <Popup>
        <div className="markerPopup">
          <h3 className="markerPopup__name">{marker.name}</h3>
        </div>
      </Popup>
    </Marker>
  ));

  const addLocalMarker = (e) => {
    const newId = `localMarker${unsaveMarkers.length + 1}_${(+new Date()).toString(16)}`;
    const newUnsaveMarker = {
      id: newId,
      name: 'New marker',
      category: 'another',
      latlng: e.latlng,
    };
    setUnsaveMarkers([...unsaveMarkers, newUnsaveMarker]);
  };

  const handleMapClick = () => {
    if (unsaveMarkers.length > 0) {
      for (let marker of unsaveMarkers) {
        onAddMarker(marker.name, marker.category, marker.latlng);
      }
      setUnsaveMarkers([]);
    }
  };

  return (
    <div className="map">
      <Map
        zoom={initialSettings.zoom}
        center={center}
        ref={mapRef}
        onClick={addLocalMarker}>
        <LayersControl position="topright">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Overlay name="Markers" checked={true}>
            <LayerGroup id="lg1">
              <Marker position={center} icon={currentLocationMarker}>
                <Popup>
                  <div className="markerPopup">
                    <img
                      className="markerPopup__img"
                      src={currentLocationIcon}
                      alt="icon"
                    />
                    <h3 className="markerPopup__name">Your current location:</h3>
                    <p className="markerPopup__info">latitude: {center[0].toFixed(3)}</p>
                    <p className="markerPopup__info">longitude: {center[1].toFixed(3)}</p>
                  </div>
                </Popup>
              </Marker>
              {markersList}
              {unsaveMarkersList}
            </LayerGroup>
          </Overlay>
        </LayersControl>
      </Map>
      {unsaveMarkers.length > 0 && (
        <div className="map__saveButton">
          <Button onClick={handleMapClick} name={'Save markers'} />
        </div>
      )}
    </div>
  );
};

export { LeafletMap };
