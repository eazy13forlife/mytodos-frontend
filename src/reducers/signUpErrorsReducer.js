import types from "../actions/types.js";

const signUpErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.THROW_SIGN_UP_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default signUpErrorsReducer;
