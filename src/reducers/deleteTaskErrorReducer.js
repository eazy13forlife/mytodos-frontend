import types from "../actions/types.js";

const deleteTaskErrorReducer = (state = null, action) => {
  switch (action.type) {
    case types.THROW_DELETE_TASK_ERROR:
      return true;
    case types.REMOVE_DELETE_TASK_ERROR:
      return null;
    default:
      return state;
  }
};

export default deleteTaskErrorReducer;
