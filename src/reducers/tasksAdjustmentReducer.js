import types from "../actions/types.js";

const initial = {
  allTasks: {
    filters: {},
    sort: {},
  },
  tasksToday: {
    filters: {},
    sort: {},
  },
  tasksUpcoming: {
    filters: {},
    sort: {},
  },
  projects: {},
};

const tasksAdjustmentReducer = (state = initial, action) => {
  switch (action.type) {
    case types.ADJUST_ALL_TASKS:
      return {
        ...state,
        allTasks: action.payload,
      };
    case types.ADJUST_TASKS_TODAY:
      return {
        ...state,
        tasksToday: action.payload,
      };
    case types.ADJUST_TASKS_UPCOMING:
      return {
        ...state,
        tasksUpcoming: action.payload,
      };
    case types.ADJUST_TASKS_PROJECT:
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.payload.projectId]: {
            filters: action.payload.filters,
            sort: action.payload.sort,
          },
        },
      };
    default:
      return state;
  }
};

export default tasksAdjustmentReducer;
