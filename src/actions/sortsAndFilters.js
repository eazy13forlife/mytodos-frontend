import types from "./types.js";

const adjustAllTasks = (adjustObject) => {
  return {
    type: types.ADJUST_ALL_TASKS,
    payload: adjustObject,
  };
};

const adjustTasksToday = (adjustObject) => {
  return {
    type: types.ADJUST_TASKS_TODAY,
    payload: adjustObject,
  };
};

const adjustTasksUpcoming = (adjustObject) => {
  return {
    type: types.ADJUST_TASKS_UPCOMING,
    payload: adjustObject,
  };
};

const adjustTasksProject = (projectId, adjustObject) => {
  return {
    type: types.ADJUST_TASKS_PROJECT,
    payload: {
      projectId: projectId,
      adjustObject: adjustObject,
    },
  };
};

export {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
};
