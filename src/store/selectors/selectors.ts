import { CategoryType, LatIngType, MarkerType } from '../../types/types';
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
