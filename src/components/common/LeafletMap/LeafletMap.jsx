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

const { Overlay } = LayersControl;

const LeafletMap = ({ initialSettings, markers, onAddMarker }) => {
  const mapRef = useRef();
  const center = [initialSettings.lat, initialSettings.lng];
  const [unsaveMarkers, setUnsaveMarkers] = useState([]);
  const [isMarkerEditMode, setIsMarkerEditMode] = useState(false);

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
      openPopup={true}
      onClick={() => {
        onMarkerClick(marker);
      }}>
      <Popup>
        <div className="markerPopup">
          <p>{marker.name}</p>
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
          <p>{marker.name}</p>
        </div>
      </Popup>
    </Marker>
  ));

  const handleClick = () => {
    if (unsaveMarkers.length > 0) {
      for (let marker of unsaveMarkers) {
        onAddMarker(marker.name, marker.category, marker.latlng);
      }
      setUnsaveMarkers([]);
    }
  };

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
          <Overlay name="Markers">
            <LayerGroup id="lg1">
              <Marker position={center} icon={currentLocationMarker}>
                <Popup>
                  <img src={currentLocationIcon} alt="icon" />
                  <h3>Your current location:</h3>
                  <p>latitude: {center[0].toFixed(3)}</p>
                  <p>longitude: {center[1].toFixed(3)}</p>
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
          <Button onClick={handleClick} name={'Save markers'} />
        </div>
      )}
    </div>
  );
};

export { LeafletMap };
