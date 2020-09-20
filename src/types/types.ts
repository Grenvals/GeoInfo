export type LatIngType = {
  lat: number,
  lng: number,
};

export type MarkerType = {
  id: string,
  name: string,
  category: string,
  latlng: LatIngType,
};

export type CategoryType = {
  id: string,
  name: string,
  isActive: boolean,
};

export type MapBGLayerType = {
  id: string,
  name: string,
  url: string,
  isActive: boolean,
};
