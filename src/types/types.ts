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

export type MapLayerType = {
  id: string,
  name: string,
  url: string,
  isActive: boolean,
};

export type SatelliteType = {
  id: string,
  name: string,
  category: string,
  latlng: LatIngType,
};

export type InternationalSpaceStationType = {
  name: string,
  latlng?: LatIngType | undefined,
  height?: number | undefined,
  trajectory: Array<LatIngType>,
  isTrajectoryActive: boolean,
  isActive: boolean,
};
