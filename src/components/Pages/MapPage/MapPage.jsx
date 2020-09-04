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

  const markers = [
    {
      id: 1,
      name: 'Pharmacy',
      category: 'pharmacies',
      latlng: {
        lat: 50.430864,
        lng: 30.415664,
      },
    },
    {
      id: 2,
      name: 'Okko',
      category: 'gas stations',
      latlng: {
        lat: 50.480864,
        lng: 30.615664,
      },
    },
    {
      id: 3,
      name: 'School 4',
      category: 'schools',
      latlng: {
        lat: 50.540864,
        lng: 30.415664,
      },
    },
    {
      id: 4,
      name: 'Sacramento',
      category: 'restaurants',
      latlng: {
        lat: 50.440864,
        lng: 30.615664,
      },
    },
  ];

  return (
    <div className="mapPage">
      {initialSettings && (
        <LeafletMap initialSettings={initialSettings} markers={markers} />
      )}
    </div>
  );
};

export { MapPage };
