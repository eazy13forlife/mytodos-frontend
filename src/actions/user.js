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
        "https://baffour-todos-backend.herokuapp.com/users/create",
        userData
      );

      dispatch({
        type: types.CREATE_USER,
        payload: createdUser.data,
      });

      dispatch(removeSignUpErrors());
    } catch (e) {
      dispatch(throwSignUpErrors(e.response.data));

      return "error";
    }
  };
};

const attemptLogin = (boolean) => {
  return {
    type: types.ATTEMPT_LOGIN,
    payload: boolean,
  };
};

const loginUser = (userData) => {
  return async (dispatch, getState) => {
    try {
      dispatch(attemptLogin(true));

      const loggedUser = await axios.post(
        "https://baffour-todos-backend.herokuapp.com/users/login",
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

      dispatch(attemptLogin(false));
    } catch (e) {
      dispatch(attemptLogin(false));

      dispatch(throwLoginError());

      return "error";
    }
  };
};

const logoutUser = () => {
  return async (dispatch, getState) => {
    const userInfo = getState().userInfo;

    try {
      await axios.post(
        "https://baffour-todos-backend.herokuapp.com/users/logout",
        undefined,
        {
          headers: {
            authorization: `bearer ${userInfo.token}`,
          },
        }
      );

      dispatch({
        type: types.LOGOUT_USER,
      });

      dispatch(removeLogoutError());
    } catch (e) {
      dispatch(throwLogoutError());

      return "error";
    }
  };
};

const getMyProfile = () => {
  return async (dispatch, getState) => {
    const userInfo = getState().userInfo;

    const userResponse = await axios.get(
      "https://baffour-todos-backend.herokuapp.com/users/me",
      {
        headers: {
          authorization: `bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({
      type: types.GET_MY_PROFILE,
      payload: userResponse.data,
    });
  };
};

export { createUser, loginUser, logoutUser, getMyProfile };
