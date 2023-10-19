import { all } from "redux-saga/effects";
import usersSaga from "./users/saga";
import postSaga from "./post/saga";
export default function* rootSaga() {
  yield all([...usersSaga, ...postSaga]);
}
