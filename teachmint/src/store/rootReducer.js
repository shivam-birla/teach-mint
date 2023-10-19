import { combineReducers } from "redux";
import usersReducer from "./users/reducer";
import postReducer from "./post/reducer";
import countryReducer from "./countries/reducer";
import timeReducer from "./timeZone/reducer";
export default combineReducers({
  user: usersReducer,
  post: postReducer,
  countries: countryReducer,
  time: timeReducer,
});
