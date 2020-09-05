import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useCurrentLocation } from '../../../hooks/useCurrentLocation';
import { LeafletMap } from '../../common/LeafletMap/LeafletMap';
import { addMarker, setMapStatus } from '../../../store/actions/actions';
import {
  getMarkers,
  getIsMapActive,
  getCurrentUserLocation,
} from '../../../store/selectors/selectors';

import './MapPage.scss';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};

const MapPage = () => {
  const dispatch = useDispatch();
  const [initialSettings, setStartPosition] = useState();
  const currentUserLocation = useSelector((state) => getCurrentUserLocation(state));
  const markers = useSelector((state) => getMarkers(state));
  const isMapActive = useSelector((state) => getIsMapActive(state));

  const { location: currentLocation } = useCurrentLocation(geolocationOptions);

  const initialMapZoom = 10;

  // AC
  const addMapMarker = (name, category, latlng) => {
    dispatch(addMarker(name, category, latlng));
  };

  const setActiveMapStatus = (isMapActive) => {
    dispatch(setMapStatus(isMapActive));
  };

  useEffect(() => {
    setActiveMapStatus(true);
    return () => setActiveMapStatus(false);
  }, [isMapActive]);

  useEffect(() => {
    if (currentLocation) {
      setStartPosition({ ...currentLocation, zoom: initialMapZoom });
    } else {
      setStartPosition({
        ...currentUserLocation,
        zoom: initialMapZoom,
      });
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
};

export { MapPage };
