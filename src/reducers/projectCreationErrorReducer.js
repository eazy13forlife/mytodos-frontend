import types from "../actions/types.js";

const projectCreationErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case types.THROW_CREATE_PROJECT_ERROR:
      return action.payload;
    case types.REMOVE_CREATE_PROJECT_ERROR:
      return null;
    default:
      return state;
  }
};

export default projectCreationErrorsReducer;
