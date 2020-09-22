import { call, put, takeEvery } from 'redux-saga/effects';
import { setISSCoordinates } from '../actions/actions';
import { GET_ISS_COORDINATES } from '../constants/constants';

// function fetchData() {
//   return fetch(
//     'https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/18/&apiKey=ZWZGPL-V74C37-LGKJZW-4K2T',
//     {}
//   ).then((response) => response.json());
// }

// http://api.open-notify.org/astros.json /astronawts
// http://api.open-notify.org/iss-now.json

function getISScoordinates() {
  return fetch(
    'https://www.n2yo.com/rest/v1/satellite/positions/25544/41.702/-76.014/0/2/&apiKey=ZWZGPL-V74C37-LGKJZW-4K2T',
    {}
  ).then((response) => response.json());
}

function* workerLoadData() {
  try {
    const ISScoordinates = yield call(getISScoordinates);
    const LatIng = {
      lat: ISScoordinates.positions[0].satlatitude,
      lng: ISScoordinates.positions[0].satlongitude,
    };
    yield put(setISSCoordinates(ISScoordinates.positions[0].sataltitude, LatIng));
  } catch (err) {
    console.log('err', err);
  }
}

export function* watchLoadData(): any {
  yield takeEvery(GET_ISS_COORDINATES, workerLoadData);
}
