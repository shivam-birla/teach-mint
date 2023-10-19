import { all } from "redux-saga/effects";
import usersSaga from "./users/saga";
import postSaga from "./post/saga";
import countrySaga from "./countries/saga";
import timeSaga from "./timeZone/saga";
export default function* rootSaga() {
  yield all([...usersSaga, ...postSaga, ...countrySaga, ...timeSaga]);
}
