import {
  FETCH_TIME_REQUEST,
  FETCH_TIME_SUCCESS,
  FETCH_TIME_FAILURE,
} from "./action";

const initialState = {
  time: null,
  loading: false,
  error: null,
};

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TIME_SUCCESS:
      return {
        ...state,
        time: action.payload,
        loading: false,
      };
    case FETCH_TIME_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default timeReducer;
