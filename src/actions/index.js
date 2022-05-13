import { createUser, loginUser, logoutUser, getMyProfile } from "./user.js";
import {
  throwSignUpErrors,
  removeLoginError,
  removeDeleteTaskError,
  removeTaskCreationError,
} from "./errors.js";
import { createTask, fetchTasks, editTask, deleteTask } from "./tasks.js";
import {
  addRecentlyCompleted,
  removeRecentlyCompleted,
} from "./recentlyCompleted.js";
import { onTaskCompletion } from "./buttonFunctions.js";
import { fetchTasksToday } from "./tasksToday.js";
import { fetchTasksUpcoming } from "./tasksUpcoming.js";

export {
  createUser,
  loginUser,
  getMyProfile,
  throwSignUpErrors,
  removeLoginError,
  logoutUser,
  createTask,
  fetchTasks,
  editTask,
  deleteTask,
  addRecentlyCompleted,
  removeRecentlyCompleted,
  onTaskCompletion,
  removeDeleteTaskError,
  fetchTasksToday,
  fetchTasksUpcoming,
  removeTaskCreationError,
};
