import { createUser, loginUser, logoutUser, getMyProfile } from "./user.js";
import {
  throwSignUpErrors,
  removeLoginError,
  removeDeleteTaskError,
  removeTaskCreationError,
  removeDeleteProjectError,
} from "./errors.js";
import {
  createTask,
  fetchTasks,
  editTask,
  deleteTask,
  fetchTask,
} from "./tasks.js";
import {
  addRecentlyCompleted,
  removeRecentlyCompleted,
} from "./recentlyCompleted.js";
import { onTaskCompletion } from "./buttonFunctions.js";

import {
  createProject,
  editProject,
  deleteProject,
  fetchProject,
  fetchProjects,
} from "./projects.js";
import {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
} from "./sortsAndFilters.js";

export {
  createUser,
  loginUser,
  getMyProfile,
  throwSignUpErrors,
  removeLoginError,
  logoutUser,
  createTask,
  fetchTasks,
  fetchTask,
  editTask,
  deleteTask,
  addRecentlyCompleted,
  removeRecentlyCompleted,
  onTaskCompletion,
  removeDeleteTaskError,
  removeTaskCreationError,
  createProject,
  editProject,
  deleteProject,
  fetchProject,
  fetchProjects,
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
  removeDeleteProjectError,
};
