import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useCurrentLocation } from '../../../hooks/useCurrentLocation';
import { LeafletMap } from '../../common/LeafletMap/LeafletMap';
import { addMarker, setMapStatus } from '../../../store/actions/actions';
import { getMarkers, getIsMapActive } from '../../../store/selectors/selectors';

import './MapPage.scss';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};

const MapPage = () => {
  const { location: currentLocation } = useCurrentLocation(geolocationOptions);
  const markers = useSelector((state) => getMarkers(state));
  const isMapActive = useSelector((state) => getIsMapActive(state));
  const dispatch = useDispatch();

  const addMapMarker = (name, category, latlng) => {
    dispatch(addMarker(name, category, latlng));
  };

  const mapMapStatus = (isMapActive) => {
    dispatch(setMapStatus(isMapActive));
  };

  useEffect(() => {
    mapMapStatus(true);
    return () => mapMapStatus(false);
  }, [isMapActive]);

  const [initialSettings, setStartPosition] = useState();
  useEffect(() => {
    if (currentLocation) {
      setStartPosition({
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
        zoom: 10,
      });
    } else {
      setStartPosition({
        lat: 50.440864,
        lng: 30.515664,
        zoom: 10,
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
