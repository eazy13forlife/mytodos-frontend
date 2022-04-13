import axios from "axios";

import types from "./types.js";
import {
  throwSignUpErrors,
  throwLoginError,
  removeLoginError,
} from "./errors.js";

const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const createdUser = await axios.post(
        "http://localhost:3000/users/create",
        userData
      );

      dispatch({
        type: types.CREATE_USER,
        payload: createdUser.data,
      });
    } catch (e) {
      dispatch(throwSignUpErrors(e.response.data));
    }
  };
};

const loginUser = (userData) => {
  return async (dispatch, getState) => {
    try {
      const loggedUser = await axios.post(
        "http://localhost:3000/users/login",
        userData
      );

      dispatch({
        type: types.LOGIN_USER,
        payload: loggedUser.data,
      });

      const loginErrorBackend = getState().loginErrorBackend;

      if (loginErrorBackend) {
        dispatch(removeLoginError());
      }
    } catch (e) {
      dispatch(throwLoginError());
    }
  };
};
export { createUser, loginUser };
