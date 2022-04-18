import types from "./types.js";

const throwSignUpErrors = (errorsData) => {
  const signUpErrors = {};

  //if error property due to validation error, put all those in signUpErrors
  if (errorsData.error) {
    Object.keys(errorsData).forEach((field) => {
      signUpErrors[field] = errorsData[field].message;
    });

    return {
      type: types.THROW_SIGN_UP_ERRORS,
      payload: signUpErrors,
    };
  }

  //if code property exists and it equals 11000, this is duplicate code, so put this in signUpErrors
  if (errorsData.code && errorsData.code === 11000) {
    const field = Object.keys(errorsData.keyValue)[0];

    signUpErrors[field] = `This ${field} already exists.`;

    return {
      type: types.THROW_SIGN_UP_ERRORS,
      payload: signUpErrors,
    };
  }
};

const removeSignUpErrors = () => {
  return {
    type: types.REMOVE_SIGN_UP_ERRORS,
  };
};

const throwLoginError = () => {
  return {
    type: types.THROW_LOGIN_ERROR,
  };
};

const removeLoginError = () => {
  return {
    type: types.REMOVE_LOGIN_ERROR,
  };
};

const throwLogoutError = () => {
  return {
    type: types.THROW_LOGOUT_ERROR,
  };
};

const removeLogoutError = () => {
  return {
    type: types.REMOVE_LOGOUT_ERROR,
  };
};
export {
  throwSignUpErrors,
  throwLoginError,
  removeSignUpErrors,
  removeLoginError,
  throwLogoutError,
  removeLogoutError,
};
