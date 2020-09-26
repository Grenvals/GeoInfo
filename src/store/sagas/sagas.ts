import { call, put, takeEvery } from 'redux-saga/effects';
import { spacexAPI, nasaAPI } from '../../api/api';
import { addMarker, setISSCoordinates, setSatelites } from '../actions/actions';
import {
  GET_ISS_COORDINATES,
  GET_SPACEX_LANDING_ZONES,
  GET_STARLINK_SATELITES,
} from '../constants/constants';

function* loadISScoordinates() {
  try {
    const ISScoordinates = yield call(nasaAPI.getISScoordinates);
    const LatIng = {
      lat: ISScoordinates.positions[0].satlatitude,
      lng: ISScoordinates.positions[0].satlongitude,
    };
    yield put(setISSCoordinates(ISScoordinates.positions[0].sataltitude, LatIng));
  } catch (err) {
    console.log('err', err);
  }
}

function* loadSpacexLandingZones() {
  try {
    const spacexLandingZones = yield call(spacexAPI.getLandingZones);
    for (let key in spacexLandingZones) {
      const latlng = {
        lat: spacexLandingZones[key].latitude,
        lng: spacexLandingZones[key].longitude,
      };
      yield put(addMarker(spacexLandingZones[key].locality, 'spacex landing zones', latlng));
    }
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
  yield takeEvery(GET_SPACEX_LANDING_ZONES, loadSpacexLandingZones);
}
