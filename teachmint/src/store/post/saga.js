import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "./action";
import { getPostApi } from "../../services/apiService";

function* fetchPostsSaga() {
  try {
    const response = yield call(getPostApi);
    yield put(fetchPostsSuccess(response));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}
export default [takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga)];
