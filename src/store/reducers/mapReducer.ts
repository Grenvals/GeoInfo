import { ADD_MARKER, SET_CATEGORY_STATUS, SET_MAP_STATUS } from '../constants/constants';
import { updateObjectInArray } from '../../utils/object-helper';
import { initialState, InitialStateType } from '../state/state';
import { MapActionTypes } from './../actions/actions';

const mapReducer = (state = initialState, action: MapActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_MARKER: {
      const newId = `markersf${(+new Date()).toString(16)}_${state.markers.length + 1}`;
      const newMarker = {
        id: newId,
        name: action.payload.name,
        category: action.payload.category,
        latlng: action.payload.latlng,
      };
      return {
        ...state,
        markers: [...state.markers, newMarker],
      };
    }
    case SET_CATEGORY_STATUS: {
      return {
        ...state,
        categories: updateObjectInArray(state.categories, action.payload.id, 'id', {
          isActive: action.payload.isActive,
        }),
      };
    }
    case SET_MAP_STATUS: {
      return {
        ...state,
        isMapActive: action.payload.isMapActive,
      };
    }
    default:
      return state;
  }
};

export { mapReducer };
