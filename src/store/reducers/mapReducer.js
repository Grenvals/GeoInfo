import { initialState } from '../state/state';

const ADD_MARKER = 'map/ADD_MARKER';

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'map/ADD_MARKER': {
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
    default:
      return state;
  }
};

export const addMarker = (name, category, latlng) => ({
  type: 'map/ADD_MARKER',
  payload: {
    name,
    category,
    latlng,
  },
});

export { mapReducer };
