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
  version: string,
  height: number,
  launch: string,
  orbit: string,
  velocity: number,
  latlng: LatIngType,
};

export type SatellitesType = {
  isActive: boolean,
  isCoverageActive: boolean,
  satelitesList: Array<SatelliteType>,
};

export type InternationalSpaceStationType = {
  name: string,
  latlng?: LatIngType | undefined,
  height?: number | undefined,
  trajectory: Array<LatIngType>,
  isActive: boolean,
  isVisibilityAreaActive: boolean,
  isTrajectoryActive: boolean,
};
