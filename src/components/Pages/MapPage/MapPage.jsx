import React, { useState, useEffect } from 'react';

import './MapPage.scss';
import { useCurrentLocation } from '../../../hooks/useCurrentLocation';
import { LeafletMap } from '../../common/LeafletMap/LeafletMap';

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};

const MapPage = () => {
  const { location: currentLocation } = useCurrentLocation(geolocationOptions);
  currentLocation && console.log(currentLocation);

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
      {initialSettings && <LeafletMap initialSettings={initialSettings} />}
    </div>
  );
};

export { MapPage };
