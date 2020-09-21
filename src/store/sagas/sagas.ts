import { call, takeEvery } from 'redux-saga/effects';
import { GET_LOAD_DATA } from '../constants/constants';

// function fetchData() {
//   return fetch(
//     'https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/18/&apiKey=ZWZGPL-V74C37-LGKJZW-4K2T',
//     {}
//   ).then((response) => response.json());
// }

// http://api.open-notify.org/astros.json /astronawts
// http://api.open-notify.org/iss-now.json

function fetchData() {
  return fetch(
    'https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=ZWZGPL-V74C37-LGKJZW-4K2T',
    {}
  ).then((response) => response.json());
}

function* workerLoadData() {
  const data = yield call(fetchData);
  console.log(data);
  // yield put(setData(data));
}

export function* watchLoadData(): any {
  yield takeEvery(GET_LOAD_DATA, workerLoadData);
}
