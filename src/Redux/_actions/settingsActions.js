import { setLocalStorage } from '../../utils';
import {
  ARABIC_FONT_SIZE,
  BANGLA_FONT_SIZE,
  MUSHAF_MODE,
  TRANSITION_MODE,
} from './Types';

export const mushafMode = value => {
  setLocalStorage('mushafMode', value);
  return {
    type: MUSHAF_MODE,
    payload: value,
  };
};

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
