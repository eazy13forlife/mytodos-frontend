import types from "../actions/types.js";

let isLoggedIn = false;

const value = window.localStorage.getItem("isLoggedIn");

if (value) {
  isLoggedIn = JSON.parse(value);
}

const isLoggedInReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
    case types.CREATE_USER:
      window.localStorage.setItem("isLoggedIn", JSON.stringify(true));

      return true;
    case types.LOGOUT_USER:
      window.localStorage.setItem("isLoggedIn", JSON.stringify(false));

      return false;
    default:
      return state;
  }
};

export default isLoggedInReducer;
