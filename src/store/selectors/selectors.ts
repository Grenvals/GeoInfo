import { CategoryType, LatIngType, MapBGLayerType, MarkerType } from '../../types/types';
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

export const getMapBGLayers = (state: RootStateType): Array<MapBGLayerType> => {
  console.log(state.map.mapBGLayers);
  return state.map.mapBGLayers;
};

export const getActiveMapBGLayer = (state: RootStateType): MapBGLayerType => {
  return state.map.mapBGLayers.filter((l) => l.isActive === true)[0];
};
