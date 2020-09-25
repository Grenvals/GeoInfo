import { call, put, takeEvery } from 'redux-saga/effects';
import { spacexAPI, NASAAPI } from '../../api/api';
import { setISSCoordinates, setSatelites } from '../actions/actions';
import { GET_ISS_COORDINATES, GET_STARLINK_SATELITES } from '../constants/constants';

function* loadISScoordinates() {
  try {
    const ISScoordinates = yield call(NASAAPI.getISScoordinates);
    const LatIng = {
      lat: ISScoordinates.positions[0].satlatitude,
      lng: ISScoordinates.positions[0].satlongitude,
    };
    yield put(setISSCoordinates(ISScoordinates.positions[0].sataltitude, LatIng));
  } catch (err) {
    console.log('err', err);
  }
}

function* loadStarlinkSatelites() {
  try {
    const starlinkSatelites = yield call(spacexAPI.getStarlinkSatelites);
    const satelitesList = starlinkSatelites.map((s: any, i: number): any => {
      const newId = `markersf${(+new Date()).toString(16)}_satelite_${i}`;
      return {
        id: newId,
        name: s.spaceTrack.OBJECT_NAME,
        version: s.version,
        launch: s.spaceTrack.LAUNCH_DATE,
        orbit: s.spaceTrack.MEAN_ELEMENT_THEORY,
        velocity: s.velocity_kms,
        height: s.height_km,
        latlng: {
          lat: s.latitude,
          lng: s.longitude,
        },
      };
    });
    yield put(setSatelites(satelitesList));
  } catch (err) {
    console.log('err', err);
  }
}

export function* watchLoadData(): any {
  yield takeEvery(GET_ISS_COORDINATES, loadISScoordinates);
  yield takeEvery(GET_STARLINK_SATELITES, loadStarlinkSatelites);
}
