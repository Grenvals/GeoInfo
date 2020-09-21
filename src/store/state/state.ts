import { CategoryType, LatIngType, MarkerType, MapLayerType } from '../../types/types';

export type InitialStateType = {
  currentUserLocation: LatIngType,
  markers: Array<MarkerType>,
  categories: Array<CategoryType>,
  isMapActive: boolean,
  mapBGLayers: Array<MapLayerType>,
  mapLayers: Array<MapLayerType>,
};

export interface RootStateType {
  map: InitialStateType;
}

export const initialState = {
  currentUserLocation: {
    lat: 50.440864,
    lng: 30.515664,
  },
  markers: [
    {
      id: '1',
      name: 'Pharmacy',
      category: 'pharmacies',
      latlng: {
        lat: 50.430864,
        lng: 30.415664,
      },
    },
    {
      id: '2',
      name: 'Okko',
      category: 'gas stations',
      latlng: {
        lat: 50.480864,
        lng: 30.615664,
      },
    },
    {
      id: '3',
      name: 'School 4',
      category: 'schools',
      latlng: {
        lat: 50.540864,
        lng: 30.415664,
      },
    },
    {
      id: '4',
      name: 'Sacramento',
      category: 'restaurants',
      latlng: {
        lat: 50.440864,
        lng: 30.615664,
      },
    },
    {
      id: '5',
      name: 'Grand',
      category: 'restaurants',
      latlng: {
        lat: 50.240864,
        lng: 30.635664,
      },
    },
    {
      id: '6',
      name: 'School 9',
      category: 'schools',
      latlng: {
        lat: 50.440864,
        lng: 30.215664,
      },
    },
    {
      id: '7',
      name: 'School 15',
      category: 'schools',
      latlng: {
        lat: 50.440864,
        lng: 30.215664,
      },
    },
    {
      id: '8',
      name: 'School 18',
      category: 'schools',
      latlng: {
        lat: 50.340864,
        lng: 30.215664,
      },
    },
    {
      id: '9',
      name: 'Central park',
      category: 'pharmacies',
      latlng: {
        lat: 50.241864,
        lng: 30.205664,
      },
    },
    {
      id: '10',
      name: 'Pharmacy',
      category: 'pharmacies',
      latlng: {
        lat: 50.210864,
        lng: 30.515664,
      },
    },
    {
      id: '11',
      name: 'Pharmacy',
      category: 'pharmacies',
      latlng: {
        lat: 50.530864,
        lng: 30.215664,
      },
    },
    {
      id: '12',
      name: 'Pharmacy',
      category: 'pharmacies',
      latlng: {
        lat: 50.420864,
        lng: 30.465664,
      },
    },
    {
      id: '13',
      name: 'Pharmacy',
      category: 'pharmacies',
      latlng: {
        lat: 50.440864,
        lng: 30.425664,
      },
    },
    {
      id: '14',
      name: 'Pharmacy',
      category: 'pharmacies',
      latlng: {
        lat: 50.480864,
        lng: 30.435664,
      },
    },
  ],
  categories: [
    { id: '1', name: 'restaurants', isActive: false },
    { id: '2', name: 'pharmacies', isActive: false },
    { id: '3', name: 'gas stations', isActive: false },
    { id: '4', name: 'schools', isActive: false },
    { id: '5', name: 'another', isActive: true },
  ],
  isMapActive: false,
  mapBGLayers: [
    {
      id: '01',
      name: 'Topographic outdoor',
      url: 'https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png/?key=Z38k7XaAQZ2rMxzRHYsZ',
      isActive: false,
    },
    {
      id: '02',
      name: 'Satellite',
      url:
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      isActive: false,
    },
    {
      id: '03',
      name: 'General staff',
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      isActive: false,
    },
    {
      id: '04',
      name: 'Bisycle roads',
      url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      isActive: false,
    },
    {
      id: '05',
      name: 'Transport',
      url:
        'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=d84cfed64b4c44e387554542ce28042a',
      isActive: false,
    },
    {
      id: '06',
      name: 'Mountain hiking 3d',
      url:
        'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=d84cfed64b4c44e387554542ce28042a',
      isActive: false,
    },
    {
      id: '07',
      name: 'Railways',
      url:
        'https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=d84cfed64b4c44e387554542ce28042a',
      isActive: false,
    },
    {
      id: '08',
      name: 'ArcGIS Streets',
      url:
        'http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      isActive: false,
    },
    {
      id: '09',
      name: 'NASA Night Lights Satellite',
      url:
        'http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',
      isActive: true,
    },
    {
      id: '10',
      name: 'NY Public Library Historic map 1702',
      url: 'http://maps.nypl.org/warper/maps/tile/12602/{z}/{x}/{y}.png',
      isActive: false,
    },
  ],
  mapLayers: [
    {
      id: '01',
      name: 'air polution realtime',
      url:
        'https://tiles.waqi.info/tiles/usepa-pm25/{z}/{x}/{y}.png?token=2bfd892052160b7462ce84641a8cc819547c7f49',
      isActive: true,
    },
    {
      id: '02',
      name: 'rain layer',
      url:
        'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=d7c6eaa896714bc9e2fd14eee64307eb',
      isActive: true,
    },
    {
      id: '03',
      name: 'air pressure layer',
      url:
        'https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=d7c6eaa896714bc9e2fd14eee64307eb',
      isActive: false,
    },
  ],
};
