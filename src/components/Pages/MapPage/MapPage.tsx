import React, { useState, useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useCurrentLocation } from '../../../hooks/useCurrentLocation';
import { LeafletMap } from '../../common/LeafletMap/LeafletMap';
import {
  addMarker,
  getISSCoordinates,
  getStarlinkSatelites,
  setMapStatus,
} from '../../../store/actions/actions';
import {
  getMarkers,
  getIsMapActive,
  getCurrentUserLocation,
  getActiveMapBGLayer,
  getActiveMapLayers,
  getInternationalSpaceStation,
  getSatelites,
} from '../../../store/selectors/selectors';
import { useShallowEqualSelector } from '../../../hooks/useShallowEqualSelector';

import './MapPage.scss';
import { LatIngType } from '../../../types/types';
import { RootStateType } from '../../../store/state/state';

type GeolocationOptionsType = {
  enableHighAccuracy: boolean,
  timeout: number,
  maximumAge: number,
};

const geolocationOptions: GeolocationOptionsType = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};

const MapPage = React.memo(() => {
  const dispatch = useDispatch();
  const currentUserLocation = useSelector((state: RootStateType) => getCurrentUserLocation(state));
  const isMapActive = useSelector((state: RootStateType) => getIsMapActive(state));
  const mapBGLayer = useSelector((state: RootStateType) => getActiveMapBGLayer(state));
  const mapLayers = useSelector((state: RootStateType) => getActiveMapLayers(state));
  const internationalSpaceStation = useSelector((state: RootStateType) =>
    getInternationalSpaceStation(state)
  );
  const satelitesList = useSelector((state: RootStateType) => getSatelites(state));
  const markers = useShallowEqualSelector(getMarkers);
  const initialMapZoom: number = 5;

  const [initialSettings, setStartPosition] = useState({
    ...currentUserLocation,
    zoom: initialMapZoom,
  });
  const { location: currentLocation } = useCurrentLocation(geolocationOptions);

  const addMapMarker = useCallback((name: string, category: string, latlng: LatIngType): void => {
    dispatch(addMarker(name, category, latlng));
  }, []);

  const setActiveMapStatus = useCallback((isMapActive: boolean): void => {
    dispatch(setMapStatus(isMapActive));
  }, []);

  useEffect(() => {
    setActiveMapStatus(true);
    return () => setActiveMapStatus(false);
  }, [isMapActive]);

  useEffect(() => {
    setInterval(() => {
      if (internationalSpaceStation.isActive) {
        dispatch(getISSCoordinates());
      }
    }, 10000);
  }, [internationalSpaceStation.isActive]);

  useEffect(() => {
    setInterval(() => {
      if (internationalSpaceStation.isActive) {
        dispatch(getStarlinkSatelites());
      }
    }, 60000);
    dispatch(getStarlinkSatelites());
  }, []);

  useEffect(() => {
    if (currentLocation) {
      setStartPosition({ ...currentLocation, zoom: initialMapZoom });
    }
  }, [currentLocation]);

  return (
    <div className="mapPage">
      {initialSettings && mapBGLayer && (
        <LeafletMap
          initialSettings={initialSettings}
          markers={markers}
          mapBGLayer={mapBGLayer}
          mapLayers={mapLayers}
          onAddMarker={addMapMarker}
          internationalSpaceStation={internationalSpaceStation}
          satelitesList={satelitesList}
        />
      )}
    </div>
  );
});

export { MapPage };
