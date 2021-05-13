import { SET_THEME } from "./types";

export const setTheme = theme => {
  return { type: SET_THEME, payload: theme };
};
