import { SET_THEME } from '../_actions/Types';

const initial = {
  dark: true,
};

// eslint-disable-next-line
export default (state = initial, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, dark: action.payload };
    default:
      return state;
  }
};
