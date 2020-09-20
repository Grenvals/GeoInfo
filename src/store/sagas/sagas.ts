import { call, takeEvery } from 'redux-saga/effects';
import { GET_LOAD_DATA } from '../constants/constants';

function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/comments').then((response) => response.json());
}

function* workerLoadData() {
  const data = yield call(fetchData);
  console.log(data);
  // yield put(setData(data));
}

export function* watchLoadData(): any {
  yield takeEvery(GET_LOAD_DATA, workerLoadData);
}
