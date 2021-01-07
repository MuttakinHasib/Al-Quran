import { setLocalStorage } from '../../utils';
import { ARABIC_FONT_SIZE, BANGLA_FONT_SIZE, TRANSITION_MODE } from './Types';

export const transitionMode = value => {
  setLocalStorage('transitionMode', value);
  return {
    type: TRANSITION_MODE,
    payload: value,
  };
};

export const arabicFontHandler = value => {
  setLocalStorage('arabicFont', value);
  return {
    type: ARABIC_FONT_SIZE,
    payload: value,
  };
};

export const banglaFontHandler = value => {
  setLocalStorage('banglaFont', value);
  return {
    type: BANGLA_FONT_SIZE,
    payload: value,
  };
};
