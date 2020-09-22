import { LatIngType } from '../../types/types';
import {
  ADD_MARKER,
  GET_ISS_COORDINATES,
  SET_CATEGORY_STATUS,
  SET_MAP_STATUS,
  SET_CURRENT_MAP_BG_LAYER,
  SET_MAP_LAYER_STATUS,
  SET_ISS_COORDINATES,
} from '../constants/constants';

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

interface setCurrentMapBGLayerType {
  type: typeof SET_CURRENT_MAP_BG_LAYER;
  payload: {
    id: string,
  };
}

interface setMapLayerStatusType {
  type: typeof SET_MAP_LAYER_STATUS;
  payload: {
    id: string,
    isActive: boolean,
  };
}

interface setISSCoordinatesType {
  type: typeof SET_ISS_COORDINATES;
  payload: {
    height: number,
    latIng: LatIngType,
  };
}

type getISSCoordinatesType = {
  type: typeof GET_ISS_COORDINATES,
};

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

export const setMapLayerStatus = (id: string, isActive: boolean): setMapLayerStatusType => ({
  type: SET_MAP_LAYER_STATUS,
  payload: {
    id,
    isActive,
  },
});

export const setCurrentMapBGLayer = (id: string): setCurrentMapBGLayerType => ({
  type: SET_CURRENT_MAP_BG_LAYER,
  payload: {
    id,
  },
});

export const setISSCoordinates = (height: number, latIng: LatIngType): setISSCoordinatesType => ({
  type: SET_ISS_COORDINATES,
  payload: {
    height,
    latIng,
  },
});

export const getISSCoordinates = (): getISSCoordinatesType => ({
  type: GET_ISS_COORDINATES,
});

export type MapActionTypes =
  | addMarkerType
  | setCategoryStatusType
  | setMapStatusType
  | setCurrentMapBGLayerType
  | setMapLayerStatusType
  | setISSCoordinatesType;
