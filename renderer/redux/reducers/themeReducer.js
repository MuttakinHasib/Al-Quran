import { SET_THEME } from "../actions/types";

const initial = {
  dark: false,
};

// eslint-disable-next-line
export const themeReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, dark: action.payload };
    default:
      return state;
  }
};
