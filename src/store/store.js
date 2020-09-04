import { combineReducers, createStore } from 'redux';
import { mapReducer } from './reducers/mapReducer';

const redusers = combineReducers({
  map: mapReducer,
});

export const store = createStore(redusers);
