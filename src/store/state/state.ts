import {
  CategoryType,
  LatIngType,
  MarkerType,
  MapLayerType,
  InternationalSpaceStationType,
  SatellitesType,
} from '../../types/types';

export type InitialStateType = {
  currentUserLocation: LatIngType,
  markers: Array<MarkerType>,
  categories: Array<CategoryType>,
  isMapActive: boolean,
  mapBGLayers: Array<MapLayerType>,
  mapLayers: Array<MapLayerType>,
  internationalSpaceStation: InternationalSpaceStationType,
  satelites: SatellitesType,
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
      name: 'Hoverla (2,061m)',
      category: 'mountains in ukraine',
      latlng: {
        lat: 48.0936,
        lng: 24.3001,
      },
    },
    {
      id: '2',
      name: 'Pip Ivan (2,021m)',
      category: 'mountains in ukraine',
      latlng: {
        lat: 47.92373,
        lng: 24.32793,
      },
    },
    {
      id: '3',
      name: '	Brebeneskul (2,035m)',
      category: 'mountains in ukraine',
      latlng: {
        lat: 48.09734,
        lng: 24.57968,
      },
    },
    {
      id: '4',
      name: '	Petros (2,035m)',
      category: 'mountains in ukraine',
      latlng: {
        lat: 48.1718,
        lng: 24.4219,
      },
    },
    {
      id: '5',
      name: '	Hoverla (2,061m)',
      category: 'mountains in ukraine',
      latlng: {
        lat: 48.16044,
        lng: 24.50002,
      },
    },
  ],
  internationalSpaceStation: {
    name: 'International space station (ISS)',
    trajectory: [],
    LatIng: {
      lat: 2,
      lng: 2,
    },
    isTrajectoryActive: true,
    isVisibilityAreaActive: true,
    isActive: true,
  },
  satelites: {
    isActive: true,
    isCoverageActive: true,
    satelitesList: [],
  },
  categories: [
    { id: '1', name: 'spacex landing zones', isActive: false },
    { id: '2', name: 'mountains in ukraine', isActive: false },
    { id: '7', name: 'another', isActive: true },
  ],
  isMapActive: false,
  mapBGLayers: [
    {
      id: '01',
      name: 'Satellite',
      url:
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      isActive: false,
    },
    {
      id: '02',
      name: 'General staff',
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      isActive: false,
    },
    {
      id: '03',
      name: 'Bisycle roads',
      url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      isActive: false,
    },
    {
      id: '04',
      name: 'Transport',
      url:
        'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=d84cfed64b4c44e387554542ce28042a',
      isActive: false,
    },
    {
      id: '05',
      name: 'Mountain hiking 3d',
      url:
        'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=d84cfed64b4c44e387554542ce28042a',
      isActive: false,
    },
    {
      id: '06',
      name: 'Railways',
      url:
        'https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=d84cfed64b4c44e387554542ce28042a',
      isActive: false,
    },
    {
      id: '07',
      name: 'ArcGIS Streets',
      url:
        'http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      isActive: false,
    },
    {
      id: '08',
      name: 'NASA Night Lights Satellite',
      url:
        'http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',
      isActive: true,
    },
    {
      id: '09',
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
      isActive: false,
    },
    {
      id: '02',
      name: 'rain layer',
      url:
        'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=d7c6eaa896714bc9e2fd14eee64307eb',
      isActive: false,
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
