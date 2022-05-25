import { combineReducers } from "redux";

import userReducer from "./userReducer.js";
import signUpErrorsReducer from "./signUpErrorsReducer.js";
import loginErrorReducer from "./loginErrorReducer.js";
import logoutErrorReducer from "./logoutErrorReducer.js";
import tasksReducer from "./tasksReducer.js";
import taskCreationErrorsReducer from "./taskCreationErrorsReducer.js";
import recentlyCompletedReducer from "./recentlyCompletedReducer.js";
import deleteTaskErrorReducer from "./deleteTaskErrorReducer.js";
import tasksTodayReducer from "./tasksTodayReducer.js";
import tasksUpcomingReducer from "./tasksUpcomingReducer.js";
import isLoggedInReducer from "./isLoggedInReducer.js";
import projectsReducer from "./projectsReducer";
import tasksAdjustmentReducer from "./tasksAdjustmentReducer.js";
import projectCreationErrorsReducer from "./projectCreationErrorReducer.js";
import deleteProjectErrorReducer from "./deleteProjectErrorReducer.js";

export default combineReducers({
  userInfo: userReducer,
  signUpErrorsBackend: signUpErrorsReducer,
  loginErrorBackend: loginErrorReducer,
  logoutErrorBackend: logoutErrorReducer,
  allTasks: tasksReducer,
  taskCreationErrorsBackend: taskCreationErrorsReducer,
  recentlyCompleted: recentlyCompletedReducer,
  deleteTaskError: deleteTaskErrorReducer,
  tasksToday: tasksTodayReducer,
  tasksUpcoming: tasksUpcomingReducer,
  isLoggedIn: isLoggedInReducer,
  projects: projectsReducer,
  tasksAdjustment: tasksAdjustmentReducer,
  projectCreationErrorsBackend: projectCreationErrorsReducer,
  deleteProjectErrorBackend: deleteProjectErrorReducer,
});
