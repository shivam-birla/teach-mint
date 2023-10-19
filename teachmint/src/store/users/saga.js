import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./action";
import { getUserApi } from "../../services/apiService";

function* fetchUsersSaga() {
  try {
    const response = yield call(getUserApi);
    console.warn(response);
    yield put(fetchUsersSuccess(response));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export default [takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga)];
