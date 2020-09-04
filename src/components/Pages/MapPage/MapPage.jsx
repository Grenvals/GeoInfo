import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './MapPage.scss';
import { useCurrentLocation } from '../../../hooks/useCurrentLocation';
import { LeafletMap } from '../../common/LeafletMap/LeafletMap';
import { addMarker } from '../../../store/actions/actions';
import { getMarkers } from '../../../store/selectors/selectors';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};

const MapPage = () => {
  const markers = useSelector((state) => getMarkers(state));
  const dispatch = useDispatch();

  const addMapMarker = (name, category, latlng) => {
    dispatch(addMarker(name, category, latlng));
  };

  const { location: currentLocation } = useCurrentLocation(geolocationOptions);

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
