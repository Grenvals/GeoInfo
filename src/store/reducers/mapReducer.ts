import {
  ADD_MARKER,
  SET_CATEGORY_STATUS,
  SET_CURRENT_MAP_BG_LAYER,
  SET_ISS_COORDINATES,
  SET_MAP_LAYER_STATUS,
  SET_MAP_STATUS,
  SET_SATELITES,
} from '../constants/constants';
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
    case SET_MAP_LAYER_STATUS: {
      return {
        ...state,
        mapLayers: updateObjectInArray(state.mapLayers, action.payload.id, 'id', {
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
    case SET_ISS_COORDINATES: {
      return {
        ...state,
        internationalSpaceStation: {
          ...state.internationalSpaceStation,
          height: action.payload.height,
          latlng: action.payload.latIng,
          trajectory: [...state.internationalSpaceStation.trajectory, action.payload.latIng],
        },
      };
    }
    case SET_SATELITES: {
      return {
        ...state,
        satelites: {
          ...state.satelites,
          satelitesList: action.payload.satelitesList,
        },
      };
    }
    case SET_CURRENT_MAP_BG_LAYER: {
      return {
        ...state,
        mapBGLayers: state.mapBGLayers.map((l) => {
          if (l.id === action.payload.id) {
            return { ...l, isActive: true };
          }
          return { ...l, isActive: false };
        }),
      };
    }
    default:
      return state;
  }
};

export { mapReducer };
