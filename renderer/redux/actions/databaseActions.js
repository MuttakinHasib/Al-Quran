import { QURAN_DATA_REQUEST, QURAN_DATA_SUCCESS } from "./types";

export const loadDatabase = data => async dispatch => {
  try {
    dispatch({ type: QURAN_DATA_REQUEST });
    dispatch({ type: QURAN_DATA_SUCCESS, payload: data });
  } catch (err) {}
};
