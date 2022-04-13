import types from "../actions/types.js";

const loginErrorReducer = (state = null, action) => {
  switch (action.type) {
    case types.THROW_LOGIN_ERROR:
      return "Unable to login. Incorrect email or password.";
    case types.REMOVE_LOGIN_ERROR:
      return null;
    default:
      return state;
  }
};

export default loginErrorReducer;
