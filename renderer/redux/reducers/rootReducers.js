import { combineReducers } from "redux";
import { databaseReducers } from "./databaseReducers";
import { settingsReducer } from "./settingsReducer";
import { themeReducer } from "./themeReducer";

export default combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
  database: databaseReducers,
});
