import axios from "axios";
import { BE_API_DEFAULT_ROUTE } from 'constants/app'
import { put, takeEvery, call } from 'redux-saga/effects'
import { DISTRICTS_CALL_REQUEST, PROVINCES_CALL_REQUEST, STREETS_CALL_REQUEST, WARDS_CALL_REQUEST } from 'redux/actionTypes'
import { callDistrictsSuccess, callProvincesSuccess, callStreetsSuccess, callWardsSuccess } from 'redux/actions/mainPage'

function fetchDistricts(provinceCode) {
  return axios({
    method: "GET",
    url: `${BE_API_DEFAULT_ROUTE}/location/districts/${provinceCode}`
  });
}

function fetchProvinces() {
  return axios({
    method: "GET",
    url: `${BE_API_DEFAULT_ROUTE}/location/provinces`
  });
}

function fetchStreets(districtId) {
  return axios({
    method: "GET",
    url: `${BE_API_DEFAULT_ROUTE}/location/streets/${districtId}`
  });
}

function fetchWards(districtId) {
  return axios({
    method: "GET",
    url: `${BE_API_DEFAULT_ROUTE}/location/wards/${districtId}`
  });
}


function* workerDistricts(action) {
  const districts = yield call(fetchDistricts, action.provinceCode)

  yield put(callDistrictsSuccess(districts));
}

function* workerProvinces() {
  const provinces = yield call(fetchProvinces)

  yield put(callProvincesSuccess(provinces));
}

function* workerStreets(action) {
  const streets = yield call(fetchStreets, action.districtId)

  yield put(callStreetsSuccess(streets));
}

function* workerWards(action) {
  const wards = yield call(fetchWards, action.districtId)

  yield put(callWardsSuccess(wards));
}

export default function* watchPostNewsAsync() {
  yield takeEvery(DISTRICTS_CALL_REQUEST, workerDistricts)
  yield takeEvery(PROVINCES_CALL_REQUEST, workerProvinces)
  yield takeEvery(STREETS_CALL_REQUEST, workerStreets)
  yield takeEvery(WARDS_CALL_REQUEST, workerWards)
}