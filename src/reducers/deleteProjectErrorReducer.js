import types from "../actions/types.js";

const deleteProjectErrorReducer = (state = null, action) => {
  switch (action.type) {
    case types.THROW_DELETE_PROJECT_ERROR:
      return true;
    case types.REMOVE_DELETE_PROJECT_ERROR:
      return null;
    default:
      return state;
  }
};

export default deleteProjectErrorReducer;
