import React, { useEffect, useRef, useState } from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  Polyline,
  Circle,
} from 'react-leaflet';

import { Button } from '../Button/Button';

import {
  greenMarker,
  redMarker,
  currentLocationMarker,
  internationalSpaceStationMarker,
  sateliteMarker,
} from '../../../store/constants/leafletMarkers';

import currentLocationIcon from '../../../assets/img/markers/home-marker.svg';
import ISSLocationIcon from '../../../assets/img/markers/iss-spacestation.svg';
import starlinkSateliteIcon from '../../../assets/img/markers/starlinksat.png';

import './LeafletMap.scss';

import {
  MarkerType,
  LatIngType,
  MapLayerType,
  InternationalSpaceStationType,
  SatellitesType,
} from '../../../types/types';

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
  internationalSpaceStation: InternationalSpaceStationType;
  satelitesList: SatellitesType;
}

const LeafletMap = React.memo(
  ({
    initialSettings,
    markers,
    mapBGLayer,
    mapLayers,
    onAddMarker,
    internationalSpaceStation,
    satelitesList,
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
    console.log(satelitesList);

    const satelites = satelitesList.satelitesList.map((s): any => (
      <Marker position={s.latlng} icon={sateliteMarker} key={s.id}>
        <Popup>
          <div className="markerPopup">
            <img className="markerPopup__img" src={starlinkSateliteIcon} alt="icon" />
            <h3 className="markerPopup__name">{s.name}</h3>
            <p className="markerPopup__info">Version: {s.version}</p>
            <p className="markerPopup__info">Launch: {s.launch}</p>
            <p className="markerPopup__info">Orbit: {s.orbit}</p>
            <p className="markerPopup__info">Velocity: {`${s.velocity} km/s`}</p>
            <p className="markerPopup__info">Height: {`${s.height} km`}</p>
            <p className="markerPopup__info">latitude: {s.latlng.lat}</p>
            <p className="markerPopup__info">longitude: {s.latlng.lng}</p>
          </div>
        </Popup>
        <Circle
          center={s.latlng}
          radius={400000}
          fillOpacity={0.2}
          // fillColor="red"
          stroke={false}
        />
      </Marker>
    ));

    return (
      <div className="map">
        <Map
          zoom={initialSettings.zoom}
          preferCanvas={true}
          center={center}
          ref={mapRef}
          onclick={addLocalMarker}>
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
                {internationalSpaceStation.latlng && internationalSpaceStation.height && (
                  <Marker
                    position={internationalSpaceStation.latlng}
                    icon={internationalSpaceStationMarker}>
                    <Popup>
                      <div className="markerPopup">
                        <img className="markerPopup__img" src={ISSLocationIcon} alt="icon" />
                        <h3 className="markerPopup__name">{internationalSpaceStation.name}</h3>
                        <p className="markerPopup__info">
                          Height: {`${internationalSpaceStation.height} km`}
                        </p>
                        <p className="markerPopup__info">
                          latitude: {internationalSpaceStation.latlng.lat.toFixed(3)}
                        </p>
                        <p className="markerPopup__info">
                          longitude: {internationalSpaceStation.latlng.lng.toFixed(3)}
                        </p>
                      </div>
                    </Popup>
                    <Circle
                      center={internationalSpaceStation.latlng}
                      radius={1400000}
                      fillOpacity={0.2}
                      // fillColor="grey"
                      stroke={true}
                    />
                  </Marker>
                )}

                <Polyline positions={internationalSpaceStation.trajectory} color={'red'} />
                {markersList}
                {satelites.length > 0 && satelites}
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
  }
);

export { LeafletMap };
