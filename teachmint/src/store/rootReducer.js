import { combineReducers } from "redux";
import usersReducer from "./users/reducer";
import postReducer from "./post/reducer";
export default combineReducers({
  user: usersReducer,
  post: postReducer,
});
