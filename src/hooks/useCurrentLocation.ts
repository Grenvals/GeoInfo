import { useState, useEffect } from 'react';

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = (pos: any) => {
    // const { latitude, longitude } = pos.coords;
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
