import { takeLatest, put, call } from "redux-saga/effects";
import {
  FETCH_TIME_REQUEST,
  fetchTimeSuccess,
  fetchTimeFailure,
} from "./action";
import { getCountryTimeApi } from "../../services/apiService";

function* fetchTime(action) {
  try {
    const time = yield call(getCountryTimeApi, action.payload);
    yield put(fetchTimeSuccess(time));
  } catch (error) {
    yield put(fetchTimeFailure(error));
  }
}

export default [takeLatest(FETCH_TIME_REQUEST, fetchTime)];
