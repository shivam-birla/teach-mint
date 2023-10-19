export const FETCH_TIME_REQUEST = "FETCH_TIME_REQUEST";
export const FETCH_TIME_SUCCESS = "FETCH_TIME_SUCCESS";
export const FETCH_TIME_FAILURE = "FETCH_TIME_FAILURE";

export const fetchTimeRequest = (country) => ({
  type: FETCH_TIME_REQUEST,
  payload: country,
});

export const fetchTimeSuccess = (time) => ({
  type: FETCH_TIME_SUCCESS,
  payload: time,
});

export const fetchTimeFailure = (error) => ({
  type: FETCH_TIME_FAILURE,
  payload: error,
});
