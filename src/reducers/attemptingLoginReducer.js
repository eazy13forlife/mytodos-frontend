import types from "../actions/types.js";

const attemptingLoginReducer = (state = false, action) => {
  switch (action.type) {
    case types.ATTEMPT_LOGIN:
      return action.payloaad;
    default:
      return state;
  }
};

export default attemptingLoginReducer;
