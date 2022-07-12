import { combineReducers } from "redux";

import userReducer from "./userReducer.js";
import signUpErrorsReducer from "./signUpErrorsReducer.js";
import loginErrorReducer from "./loginErrorReducer.js";
import logoutErrorReducer from "./logoutErrorReducer.js";
import tasksReducer from "./tasksReducer.js";
import taskCreationErrorsReducer from "./taskCreationErrorsReducer.js";
import recentlyCompletedReducer from "./recentlyCompletedReducer.js";
import deleteTaskErrorReducer from "./deleteTaskErrorReducer.js";
import isLoggedInReducer from "./isLoggedInReducer.js";
import projectsReducer from "./projectsReducer";
import tasksAdjustmentReducer from "./tasksAdjustmentReducer.js";
import projectCreationErrorsReducer from "./projectCreationErrorReducer.js";
import deleteProjectErrorReducer from "./deleteProjectErrorReducer.js";
import attemptingLoginReducer from "./attemptingLoginReducer";

export default combineReducers({
  userInfo: userReducer,
  signUpErrorsBackend: signUpErrorsReducer,
  loginErrorBackend: loginErrorReducer,
  logoutErrorBackend: logoutErrorReducer,
  allTasks: tasksReducer,
  taskCreationErrorsBackend: taskCreationErrorsReducer,
  recentlyCompleted: recentlyCompletedReducer,
  deleteTaskError: deleteTaskErrorReducer,
  isLoggedIn: isLoggedInReducer,
  projects: projectsReducer,
  tasksAdjustment: tasksAdjustmentReducer,
  projectCreationErrorsBackend: projectCreationErrorsReducer,
  deleteProjectErrorBackend: deleteProjectErrorReducer,
  attemptinglogin: attemptingLoginReducer,
});
