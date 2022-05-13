import types from "../actions/types.js";

const tasksUpcomingReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TASKS_UPCOMING:
      return action.payload;
    case types.THROW_FETCH_TASKS_UPCOMING_ERROR:
      return "error";
    default:
      return state;
  }
};

export default tasksUpcomingReducer;
