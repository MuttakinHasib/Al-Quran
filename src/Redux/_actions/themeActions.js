import { SET_THEME } from './Types';

export const setTheme = theme => {
  return { type: SET_THEME, payload: theme };
};
