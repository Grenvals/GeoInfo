import { ADD_MARKER, SET_CATEGORY_STATUS, SET_MAP_STATUS } from '../constants/constants';

export const addMarker = (name, category, latlng) => ({
  type: ADD_MARKER,
  payload: {
    name,
    category,
    latlng,
  },
});

export const setCategoryStatus = (id, isActive) => ({
  type: SET_CATEGORY_STATUS,
  payload: {
    id,
    isActive,
  },
});

export const setMapStatus = (isMapActive) => ({
  type: SET_MAP_STATUS,
  payload: {
    isMapActive,
  },
});
