import { takeLatest, put, call } from "redux-saga/effects";
import {
  FETCH_COUNTRIES_REQUEST,
  fetchCountriesSuccess,
  fetchCountriesFailure,
} from "./action";
import { getCountryApi } from "../../services/apiService";

function* fetchCountries() {
  try {
    const countries = yield call(getCountryApi);
    yield put(fetchCountriesSuccess(countries));
  } catch (error) {
    yield put(fetchCountriesFailure(error));
  }
}

export default [takeLatest(FETCH_COUNTRIES_REQUEST, fetchCountries)];
