import types from "../actions/types.js";

const signUpErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case types.THROW_SIGN_UP_ERRORS:
      return action.payload;
    case types.REMOVE_SIGN_UP_ERRORS:
      return null;
    default:
      return state;
  }
};

export default signUpErrorsReducer;
