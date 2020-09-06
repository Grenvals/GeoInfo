import React, { useState, useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useCurrentLocation } from '../../../hooks/useCurrentLocation';
import { LeafletMap } from '../../common/LeafletMap/LeafletMap';
import { addMarker, setMapStatus } from '../../../store/actions/actions';
import {
  getMarkers,
  getIsMapActive,
  getCurrentUserLocation,
} from '../../../store/selectors/selectors';
import { useShallowEqualSelector } from '../../../hooks/useShallowEqualSelector';

import './MapPage.scss';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};

const MapPage = React.memo(() => {
  const dispatch = useDispatch();

  const [initialSettings, setStartPosition] = useState();

  const currentUserLocation = useSelector((state) => getCurrentUserLocation(state));

  const markers = useShallowEqualSelector(getMarkers);
  const isMapActive = useSelector((state) => getIsMapActive(state));

  const { location: currentLocation } = useCurrentLocation(geolocationOptions);

  const initialMapZoom = 10;

  const addMapMarker = useCallback((name, category, latlng) => {
    dispatch(addMarker(name, category, latlng));
  });

  const setActiveMapStatus = useCallback((isMapActive) => {
    dispatch(setMapStatus(isMapActive));
  });

  useEffect(() => {
    setActiveMapStatus(true);
    return () => setActiveMapStatus(false);
  }, [isMapActive]);

  useEffect(() => {
    if (currentLocation) {
      setStartPosition({ ...currentLocation, zoom: initialMapZoom });
      console.log('11111');
    } else {
      setStartPosition({
        ...currentUserLocation,
        zoom: initialMapZoom,
      });
      console.log('22222');
    }
  }, [currentLocation]);

  return (
    <div className="mapPage">
      {initialSettings && (
        <LeafletMap
          initialSettings={initialSettings}
          markers={markers}
          onAddMarker={addMapMarker}
        />
      )}
    </div>
  );
});

export { MapPage };
