import React, { useEffect, useRef, useState } from 'react';
import { Map, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';

import { Button } from '../Button/Button';

import {
  greenMarker,
  redMarker,
  currentLocationMarker,
} from '../../../store/constants/leafletMarkers';

import currentLocationIcon from '../../../assets/img/markers/home-marker.svg';

import './LeafletMap.scss';

import { MarkerType, LatIngType, MapLayerType } from '../../../types/types';

type InitialSettingsType = {
  lat: number,
  lng: number,
  zoom: number,
};

interface LeafletMapPropsType {
  initialSettings: InitialSettingsType;
  markers: Array<MarkerType>;
  mapBGLayer: MapLayerType;
  mapLayers: Array<MapLayerType>;
  onAddMarker(name: string, category: string, latlng: LatIngType): void;
}

const LeafletMap = ({
  initialSettings,
  markers,
  mapBGLayer,
  mapLayers,
  onAddMarker,
}: LeafletMapPropsType) => {
  const { Overlay } = LayersControl;

  const mapRef = useRef<Map>(null);
  const center = { lat: initialSettings.lat, lng: initialSettings.lng };
  const [unsaveMarkers, setUnsaveMarkers] = useState<Array<MarkerType>>([]);

  useEffect(() => {
    setInterval(() => {
      if (mapRef.current) {
        mapRef.current.leafletElement.invalidateSize();
      }
    }, 1000);
  }, [mapRef]);

  const mapLayersList = mapLayers.map((l) => (
    <TileLayer
      key={l.id}
      attribution='&amp;copy <a href="http://grenvalz.kl.com.ua/">Valentyn Dubin</a>'
      url={l.url}
    />
  ));

  const markersList = markers.map((marker: MarkerType) => (
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

  const unsaveMarkersList = unsaveMarkers.map((marker: MarkerType) => (
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

  const addLocalMarker = (e: any) => {
    const newId = `localMarker${unsaveMarkers.length + 1}_${(+new Date()).toString(16)}`;
    const newUnsaveMarker = {
      id: newId,
      name: 'New marker',
      category: 'another',
      latlng: e.latlng,
    };
    setUnsaveMarkers([...unsaveMarkers, newUnsaveMarker]);
  };

  const saveUnsaveMarkers = () => {
    if (unsaveMarkers.length > 0) {
      for (let marker of unsaveMarkers) {
        onAddMarker(marker.name, marker.category, marker.latlng);
      }
      setUnsaveMarkers([]);
    }
  };

  const clearUnsaveMarkers = () => {
    setUnsaveMarkers([]);
  };

  return (
    <div className="map">
      <Map zoom={initialSettings.zoom} center={center} ref={mapRef} onclick={addLocalMarker}>
        <LayersControl position="topright">
          <TileLayer
            attribution='&amp;copy <a href="http://grenvalz.kl.com.ua/">Valentyn Dubin</a>'
            url={mapBGLayer.url}
          />
          {mapLayersList}
          <Overlay name="Saved Markers" checked={true}>
            <LayerGroup id="lg1">
              <Marker position={center} icon={currentLocationMarker}>
                <Popup>
                  <div className="markerPopup">
                    <img className="markerPopup__img" src={currentLocationIcon} alt="icon" />
                    <h3 className="markerPopup__name">Your current location:</h3>
                    <p className="markerPopup__info">latitude: {center.lat.toFixed(3)}</p>
                    <p className="markerPopup__info">longitude: {center.lng.toFixed(3)}</p>
                  </div>
                </Popup>
              </Marker>
              {markersList}
            </LayerGroup>
          </Overlay>
          <Overlay name="Unsave markers" checked={true}>
            <LayerGroup id="lg1">{unsaveMarkersList}</LayerGroup>
          </Overlay>
        </LayersControl>
      </Map>
      {unsaveMarkers.length > 0 && (
        <div className="map__controlButtons">
          <Button onClick={saveUnsaveMarkers} name="Save markers" />
          <Button onClick={clearUnsaveMarkers} name="Clear" color="white" />
        </div>
      )}
    </div>
  );
};

export { LeafletMap };
