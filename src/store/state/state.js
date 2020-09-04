export const initialState = {
  markers: [
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
  ],
  categories: [
    { id: 1, name: 'restaurants', isActive: true },
    { id: 2, name: 'pharmacies', isActive: true },
    { id: 3, name: 'gas stations', isActive: true },
    { id: 4, name: 'schools', isActive: true },
    { id: 5, name: 'another', isActive: true },
  ],
};
