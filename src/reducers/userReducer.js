import types from "../actions/types.js";

let userData;

const userJSON = localStorage.getItem("user");

if (userJSON) {
  userData = JSON.parse(userJSON);
} else {
  userData = null;
}

const userReducer = (state = userData, action) => {
  switch (action.type) {
    case types.CREATE_USER: {
      const userJSON = JSON.stringify(action.payload);

      localStorage.setItem("user", userJSON);

      return action.payload;
    }
    case types.LOGIN_USER: {
      const userJSON = JSON.stringify(action.payload);

      localStorage.setItem("user", userJSON);

      return action.payload;
    }
    case types.LOGOUT_USER:
      localStorage.removeItem("user");

      return null;
    default:
      return state;
  }
};

export default userReducer;
