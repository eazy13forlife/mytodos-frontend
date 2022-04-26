import types from "../actions/types.js";

const taskCreationErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case types.THROW_TASK_CREATION_ERROR:
      return action.payload;
    case types.REMOVE_TASK_CREATION_ERROR:
      return null;
    default:
      return state;
  }
};

export default taskCreationErrorsReducer;
