import {
  CategoryType,
  InternationalSpaceStationType,
  LatIngType,
  MapLayerType,
  MarkerType,
  SatellitesType,
} from '../../types/types';
import { RootStateType } from '../state/state';

export const getMarkers = (state: RootStateType): Array<MarkerType> => {
  const activeCategories = state.map.categories
    .filter((c) => c.isActive === true)
    .map((c) => c.name);
  return state.map.markers.filter((m) =>
    activeCategories.some((category) => m.category === category)
  );
};

export const getCurrentUserLocation = (state: RootStateType): LatIngType => {
  return state.map.currentUserLocation;
};

export const getCategories = (state: RootStateType): Array<CategoryType> => {
  return state.map.categories;
};

export const getIsMapActive = (state: RootStateType): boolean => {
  return state.map.isMapActive;
};

export const getMapLayers = (state: RootStateType): Array<MapLayerType> => {
  return state.map.mapLayers;
};

export const getActiveMapLayers = (state: RootStateType): Array<MapLayerType> => {
  return state.map.mapLayers.filter((l) => l.isActive === true);
};

export const getMapBGLayers = (state: RootStateType): Array<MapLayerType> => {
  return state.map.mapBGLayers;
};

export const getActiveMapBGLayer = (state: RootStateType): MapLayerType => {
  return state.map.mapBGLayers.filter((l) => l.isActive === true)[0];
};

export const getInternationalSpaceStation = (
  state: RootStateType
): InternationalSpaceStationType => {
  return state.map.internationalSpaceStation;
};

export const getSatelites = (state: RootStateType): SatellitesType => {
  return state.map.satelites;
};

export const getSatelitesCount = (state: RootStateType): number => {
  return state.map.satelites.satelitesList.length - 1;
};
