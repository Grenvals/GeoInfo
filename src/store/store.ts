import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { mapReducer } from './reducers/mapReducer';
import createSagaMiddlware from 'redux-saga';
import { watchLoadData } from './sagas/sagas';

const sagaMiddleware = createSagaMiddlware();

const redusers = combineReducers({
  map: mapReducer,
});

export const store = createStore(redusers, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchLoadData);
