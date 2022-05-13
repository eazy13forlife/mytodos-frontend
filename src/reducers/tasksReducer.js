import types from "../actions/types.js";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_ALL_TASKS:
      return action.payload;
    case types.THROW_FETCH_ALL_TASKS_ERROR:
      return "error";
    default:
      return state;
  }
};

export default tasksReducer;
