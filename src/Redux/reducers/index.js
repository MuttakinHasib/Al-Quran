import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
});
