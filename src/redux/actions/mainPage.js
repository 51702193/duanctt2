
import {
  DISTRICTS_CALL_REQUEST,
  DISTRICTS_CALL_SUCCESS,
  PROVINCES_CALL_REQUEST,
  PROVINCES_CALL_SUCCESS,
  STREETS_CALL_REQUEST,
  STREETS_CALL_SUCCESS,
  WARDS_CALL_REQUEST,
  WARDS_CALL_SUCCESS
} from "redux/actionTypes";

export const callDistricts = (provinceCode) => ({
  type: DISTRICTS_CALL_REQUEST,
  provinceCode
});

export const callDistrictsSuccess = response => ({
  type: DISTRICTS_CALL_SUCCESS,
  payload: {
    data: response.data
  }
});

export const callProvinces = () => ({
  type: PROVINCES_CALL_REQUEST,
});

export const callProvincesSuccess = response => ({
  type: PROVINCES_CALL_SUCCESS,
  payload: {
    data: response.data
  }
});

export const callStreets = (districtId) => ({
  type: STREETS_CALL_REQUEST,
  districtId
});

export const callStreetsSuccess = response => ({
  type: STREETS_CALL_SUCCESS,
  payload: {
    data: response.data
  }
});

export const callWards = (districtId) => ({
  type: WARDS_CALL_REQUEST,
  districtId
});

export const callWardsSuccess = response => ({
  type: WARDS_CALL_SUCCESS,
  payload: {
    data: response.data
  }
});