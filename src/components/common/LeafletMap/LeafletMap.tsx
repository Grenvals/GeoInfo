import React, { useEffect, useRef, useState } from 'react';
import { Map, TileLayer, Marker, LayersControl, LayerGroup, Polyline, Circle } from 'react-leaflet';

import { Button } from '../Button/Button';
import { MarkerPopup } from '../Popup/MarkerPopup/MarkerPopup';

import {
  greenMarker,
  redMarker,
  currentLocationMarker,
  internationalSpaceStationMarker,
  sateliteMarker,
} from '../../../store/constants/leafletMarkers';

import currentLocationIcon from '../../../assets/img/markers/home-marker.svg';
import ISSLocationIcon from '../../../assets/img/popup/iss.png';
import starlinkSateliteIcon from '../../../assets/img/popup/starlink.png';

import { MarkerType } from '../../../types/types';
import { LeafletMapPropsType } from './types';

import './LeafletMap.scss';

const LeafletMap = React.memo(
  ({
    initialSettings,
    markers,
    mapBGLayer,
    mapLayers,
    onAddMarker,
    internationalSpaceStation,
    satelites,
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

    const mapLayersList = mapLayers.map((l) => (
      <TileLayer
        key={l.id}
        attribution='&amp;copy <a href="http://grenvalz.kl.com.ua/">Valentyn Dubin</a>'
        url={l.url}
      />
    ));

    const markersList = markers.map((m: MarkerType) => (
      <Marker key={m.id} position={m.latlng} icon={greenMarker}>
        <MarkerPopup
          name={m.name}
          latlng={m.latlng}
          image={currentLocationIcon}
          imageSize={'contain'}
        />
      </Marker>
    ));

    const unsaveMarkersList = unsaveMarkers.map((m: MarkerType) => (
      <Marker key={m.id} position={m.latlng} icon={redMarker}>
        <MarkerPopup
          name={m.name}
          latlng={m.latlng}
          image={currentLocationIcon}
          imageSize={'contain'}
        />
      </Marker>
    ));

    const satelitesList = satelites.satelitesList.map((s): any => (
      <Marker
        position={s.latlng}
        icon={sateliteMarker}
        key={s.id}
        onMouseOver={(e: any) => {
          e.target.openPopup();
        }}>
        {satelites.isCoverageActive && (
          <Circle center={s.latlng} radius={400000} fillOpacity={0.2} stroke={false}>
            <MarkerPopup
              name={s.name}
              version={s.version}
              launch={s.launch}
              orbit={s.orbit}
              velocity={s.velocity}
              height={s.height}
              latlng={s.latlng}
              image={starlinkSateliteIcon}
            />
          </Circle>
        )}
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
              <LayerGroup>
                <Marker position={center} icon={currentLocationMarker}>
                  <MarkerPopup
                    name={'Your current location:'}
                    latlng={center}
                    image={currentLocationIcon}
                    imageSize={'contain'}
                  />
                </Marker>
                {markersList}
              </LayerGroup>
            </Overlay>
            <Overlay name="Unsave markers" checked={true}>
              <LayerGroup>{unsaveMarkersList}</LayerGroup>
            </Overlay>
            <Overlay name="Satelites" checked={true}>
              <LayerGroup>
                {internationalSpaceStation.isActive && internationalSpaceStation.latlng && (
                  <Marker
                    position={internationalSpaceStation.latlng}
                    icon={internationalSpaceStationMarker}>
                    <MarkerPopup
                      name={internationalSpaceStation.name}
                      height={internationalSpaceStation.height}
                      latlng={internationalSpaceStation.latlng}
                      image={ISSLocationIcon}
                    />
                    {internationalSpaceStation.isVisibilityAreaActive && (
                      <Circle
                        center={internationalSpaceStation.latlng}
                        radius={1400000}
                        fillOpacity={0.2}
                        stroke={true}
                      />
                    )}
                    {internationalSpaceStation.isTrajectoryActive && (
                      <Polyline positions={internationalSpaceStation.trajectory} color={'red'} />
                    )}
                  </Marker>
                )}
                {satelites.isActive && satelites.satelitesList.length > 0 && satelitesList}
              </LayerGroup>
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
