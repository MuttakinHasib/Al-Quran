import { getLocalStorage } from '../../utils';
import {
  ARABIC_FONT_SIZE,
  BANGLA_FONT_SIZE,
  ENGLISH_FONT_SIZE,
  TRANSITION_MODE,
} from '../_actions/Types';

const transitionMode = getLocalStorage('transitionMode');
const arabicFont = getLocalStorage('arabicFont');
const banglaFont = getLocalStorage('banglaFont');
const englishFont = getLocalStorage('englishFont');

const initial = {
  isTransition: transitionMode ? transitionMode : true,
  arabicFontSize: arabicFont ? arabicFont : 48,
  banglaFontSize: banglaFont ? banglaFont : 22,
  englishFontSize: englishFont ? englishFont : 48,
};

// eslint-disable-next-line
export default (state = initial, action) => {
  switch (action.type) {
    case TRANSITION_MODE:
      return { ...state, isTransition: action.payload };

    case ARABIC_FONT_SIZE:
      return { ...state, arabicFontSize: action.payload };

    case BANGLA_FONT_SIZE:
      return { ...state, banglaFontSize: action.payload };

    case ENGLISH_FONT_SIZE:
      return { ...state, banglaFontSize: action.payload };

    default:
      return state;
  }
};
