import { combineReducers } from "redux";

import userReducer from "./userReducer.js";
import signUpErrorsReducer from "./signUpErrorsReducer.js";
import loginErrorReducer from "./loginErrorReducer.js";
import logoutErrorReducer from "./logoutErrorReducer.js";
import tasksReducer from "./tasksReducer.js";
import taskCreationErrorsReducer from "./taskCreationErrorsReducer.js";

export default combineReducers({
  userInfo: userReducer,
  signUpErrorsBackend: signUpErrorsReducer,
  loginErrorBackend: loginErrorReducer,
  logoutErrorBackend: logoutErrorReducer,
  allTasks: tasksReducer,
  taskCreationErrorsBackend: taskCreationErrorsReducer,
});
