import axios from "axios";

import types from "./types.js";
import {
  throwSignUpErrors,
  throwLoginError,
  removeSignUpErrors,
  removeLoginError,
  throwLogoutError,
  removeLogoutError,
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

      dispatch(removeSignUpErrors());
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

const logoutUser = () => {
  return async (dispatch, getState) => {
    const userInfo = getState().userInfo;

    try {
      await axios.post("http://localhost:3000/users/logout", undefined, {
        headers: {
          authorization: `bearer ${userInfo.token}`,
        },
      });

      dispatch({
        type: types.LOGOUT_USER,
      });

      dispatch(removeLogoutError());
    } catch (e) {
      dispatch(throwLogoutError());
    }
  };
};

const getMyProfile = () => {
  return async (dispatch, getState) => {
    const userInfo = getState().userInfo;

    const userResponse = await axios.get("http://localhost:3000/users/me", {
      headers: {
        authorization: `bearer ${userInfo.token}`,
      },
    });

    dispatch({
      type: types.GET_MY_PROFILE,
      payload: userResponse.data,
    });
  };
};

export { createUser, loginUser, logoutUser, getMyProfile };
