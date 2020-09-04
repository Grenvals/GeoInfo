import { ADD_MARKER, SET_CATEGORY_STATUS } from '../constants/constants';
import { updateObjectInArray } from '../../utils/object-helper';
import { initialState } from '../state/state';

const mapReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export { mapReducer };
