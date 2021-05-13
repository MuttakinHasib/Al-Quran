import {
  QURAN_DATA_FAIL,
  QURAN_DATA_REQUEST,
  QURAN_DATA_SUCCESS,
} from "../actions/types";

export const databaseReducers = (state = {}, action) => {
  switch (action.type) {
    case QURAN_DATA_REQUEST:
      return {
        loading: true,
      };
    case QURAN_DATA_SUCCESS:
      return {
        loading: false,
        error: null,
        quran: action.payload,
      };
    case QURAN_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
