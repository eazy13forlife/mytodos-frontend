import types from "../actions/types.js";

const logoutErrorReducer = (state = null, action) => {
  switch (action.type) {
    case types.THROW_LOGOUT_ERROR:
      return "Unable to logout";
    case types.REMOVE_LOGOUT_ERROR:
      return null;
    default:
      return state;
  }
};

export default logoutErrorReducer;
