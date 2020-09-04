import React, { useRef, useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import redMarkerIcon from '../../../assets/img/markers/red-marker.svg';
import greenMarkerIcon from '../../../assets/img/markers/green-marker.svg';
import cuttentLocationMarkerIcon from '../../../assets/img/markers/home-marker.svg';

import './LeafletMap.scss';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/';

const redMarker = new L.Icon({
  iconUrl: redMarkerIcon,
  iconRetinaUrl: redMarkerIcon,
  iconSize: new L.Point(38, 58),
  className: 'leaflet-div-icon',
});

const greenMarker = new L.Icon({
  iconUrl: greenMarkerIcon,
  iconRetinaUrl: greenMarkerIcon,
  iconSize: new L.Point(38, 58),
  className: 'leaflet-div-icon',
});

const currentLocationMarker = new L.Icon({
  iconUrl: cuttentLocationMarkerIcon,
  iconRetinaUrl: cuttentLocationMarkerIcon,
  iconSize: new L.Point(47, 58),
  className: 'leaflet-div-icon',
});

const LeafletMap = ({ initialSettings, markers }) => {
  const mapRef = useRef();

  const center = [initialSettings.lat, initialSettings.lng];

  useEffect(() => {
    setInterval(() => {
      if (mapRef.current) {
        mapRef.current.leafletElement.invalidateSize();
      }
    }, 1000);
  }, [mapRef]);

  const [unsaveMarkers, setUnsaveMarkers] = useState([]);

  const [isMarkerEditMode, setIsMarkerEditMode] = useState(false);

  const onMarkerClick = (e) => {
    console.log(e);
  };

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
        <div className="gggg">
          {isMarkerEditMode ? <input type="text" /> : <p>{marker.name}</p>}
        </div>
      </Popup>
    </Marker>
  ));

  const localMarkers = unsaveMarkers.map((marker) => (
    <Marker
      key={marker.id}
      position={[marker.latlng.lat, marker.latlng.lng]}
      icon={redMarker}
      openPopup={true}
      onClick={() => {
        onMarkerClick(marker);
      }}>
      <Popup>
        <div className="gggg">
          {isMarkerEditMode ? <input type="text" /> : <p>{marker.name}</p>}
        </div>
      </Popup>
    </Marker>
  ));

  const addLocalMarker = (e) => {
    const markers = [...unsaveMarkers];
    const newId = `f${(+new Date()).toString(16)}`;
    markers.push({
      id: newId,
      name: 'New marker',
      category: 'another',
      latlng: e.latlng,
    });
    setUnsaveMarkers(markers);
  };

  return (
    <div className="map">
      <Map
        zoom={initialSettings.zoom}
        center={center}
        ref={mapRef}
        onClick={addLocalMarker}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={currentLocationMarker}>
          <Popup>
            <img src={cuttentLocationMarkerIcon} alt="icon" />
            <h3>Your current location:</h3>
            <p>latitude: {center[0].toFixed(3)}</p>
            <p>longitude: {center[1].toFixed(3)}</p>
          </Popup>
        </Marker>
        {markersList}
        {localMarkers}
      </Map>
    </div>
  );
};

export { LeafletMap };
