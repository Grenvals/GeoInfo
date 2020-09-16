import { LatIngType } from '../../types/types';
import { ADD_MARKER, SET_CATEGORY_STATUS, SET_MAP_STATUS } from '../constants/constants';

interface addMarkerType {
  type: typeof ADD_MARKER;
  payload: {
    name: string,
    category: string,
    latlng: LatIngType,
  };
}

interface setCategoryStatusType {
  type: typeof SET_CATEGORY_STATUS;
  payload: {
    id: string,
    isActive: boolean,
  };
}

interface setMapStatusType {
  type: typeof SET_MAP_STATUS;
  payload: {
    isMapActive: boolean,
  };
}

export const addMarker = (name: string, category: string, latlng: LatIngType): addMarkerType => ({
  type: ADD_MARKER,
  payload: {
    name,
    category,
    latlng,
  },
});

export const setCategoryStatus = (id: string, isActive: boolean): setCategoryStatusType => ({
  type: SET_CATEGORY_STATUS,
  payload: {
    id,
    isActive,
  },
});

export const setMapStatus = (isMapActive: boolean): setMapStatusType => ({
  type: SET_MAP_STATUS,
  payload: {
    isMapActive,
  },
});

export type MapActionTypes = addMarkerType | setCategoryStatusType | setMapStatusType;
