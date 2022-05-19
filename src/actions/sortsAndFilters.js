import types from "./types.js";

const adjustAllTasks = (filters, sort) => {
  return {
    type: types.ADJUST_ALL_TASKS,
    payload: {
      filters: filters,
      sort: sort,
    },
  };
};

const adjustTasksToday = (filters, sort) => {
  return {
    type: types.ADJUST_TASKS_TODAY,
    payload: {
      filters: filters,
      sort: sort,
    },
  };
};

const adjustTasksUpcoming = (filters, sort) => {
  return {
    type: types.ADJUST_TASKS_UPCOMING,
    payload: {
      filters: filters,
      sort: sort,
    },
  };
};

const adjustTasksProject = (projectId, filters, sort) => {
  return {
    type: types.ADJUST_TASKS_UPCOMING,
    payload: {
      projectId: projectId,
      filters: filters,
      sort: sort,
    },
  };
};

export {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
};
