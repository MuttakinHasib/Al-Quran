import { getLocalStorage } from '../../utils';
import {
  ARABIC_FONT_SIZE,
  BANGLA_FONT_SIZE,
  ENGLISH_FONT_SIZE,
  TRANSITION_MODE,
  MUSHAF_MODE,
} from '../_actions/Types';

const mushafMode = getLocalStorage('mushafMode');
const transitionMode = getLocalStorage('transitionMode');
const arabicFont = getLocalStorage('arabicFont');
const banglaFont = getLocalStorage('banglaFont');
const englishFont = getLocalStorage('englishFont');

const initial = {
  isMushaf: mushafMode !== null ? mushafMode : false,
  isTransition: transitionMode !== null ? transitionMode : true,
  arabicFontSize: arabicFont !== null ? arabicFont : 48,
  banglaFontSize: banglaFont !== null ? banglaFont : 22,
  englishFontSize: englishFont !== null ? englishFont : 48,
};

// eslint-disable-next-line
export default (state = initial, action) => {
  switch (action.type) {
    case MUSHAF_MODE:
      return { ...state, isMushaf: action.payload };
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
