import types from "../actions/types.js";

const tasksTodayReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TASKS_TODAY:
      return action.payload;
    default:
      return state;
  }
};

export default tasksTodayReducer;
