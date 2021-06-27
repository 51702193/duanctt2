
import {
  DISTRICTS_CALL_REQUEST_POST_NEWS,
  DISTRICTS_CALL_SUCCESS_POST_NEWS,
  PROVINCES_CALL_REQUEST_POST_NEWS,
  PROVINCES_CALL_SUCCESS_POST_NEWS,
  STREETS_CALL_REQUEST_POST_NEWS,
  STREETS_CALL_SUCCESS_POST_NEWS,
  WARDS_CALL_REQUEST_POST_NEWS,
  WARDS_CALL_SUCCESS_POST_NEWS
} from "redux/actionTypes";

export const callDistricts = (provinceCode) => ({
  type: DISTRICTS_CALL_REQUEST_POST_NEWS,
  provinceCode
});

export const callDistrictsSuccess = response => ({
  type: DISTRICTS_CALL_SUCCESS_POST_NEWS,
  payload: {
    data: response.data
  }
});

export const callProvinces = () => ({
  type: PROVINCES_CALL_REQUEST_POST_NEWS,
});

export const callProvincesSuccess = response => ({
  type: PROVINCES_CALL_SUCCESS_POST_NEWS,
  payload: {
    data: response.data
  }
});

export const callStreets = (districtId) => ({
  type: STREETS_CALL_REQUEST_POST_NEWS,
  districtId
});

export const callStreetsSuccess = response => ({
  type: STREETS_CALL_SUCCESS_POST_NEWS,
  payload: {
    data: response.data
  }
});

export const callWards = (districtId) => ({
  type: WARDS_CALL_REQUEST_POST_NEWS,
  districtId
});

export const callWardsSuccess = response => ({
  type: WARDS_CALL_SUCCESS_POST_NEWS,
  payload: {
    data: response.data
  }
});