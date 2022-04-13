import { combineReducers } from "redux";

import userReducer from "./userReducer.js";
import signUpErrorsReducer from "./signUpErrorsReducer.js";
import loginErrorReducer from "./loginErrorReducer.js";

export default combineReducers({
  userInfo: userReducer,
  signUpErrorsBackend: signUpErrorsReducer,
  loginErrorBackend: loginErrorReducer,
});
