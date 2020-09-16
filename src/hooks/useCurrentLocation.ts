import { useState, useEffect } from 'react';
import { LatIngType } from '../types/types';

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState<LatIngType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (pos: any) => {
    setLocation({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
  };

  const handleError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export { useCurrentLocation };
