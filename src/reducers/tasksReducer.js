import types from "../actions/types.js";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_ALL_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export default tasksReducer;
