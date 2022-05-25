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

const throwTaskCreationError = (data) => {
  const errorsObject = {};

  if (data.errors) {
    const { errors } = data;

    const errorFields = Object.keys(errors);

    errorFields.forEach((field) => {
      errorsObject[field] = errors[field].message;
    });

    return {
      type: types.THROW_TASK_CREATION_ERROR,
      payload: errorsObject,
    };
  }

  return {
    type: types.THROW_TASK_CREATION_ERROR,
    payload: errorsObject,
  };
};

const removeTaskCreationError = () => {
  return {
    type: types.REMOVE_TASK_CREATION_ERROR,
  };
};

const throwDeleteTaskError = () => {
  return {
    type: types.THROW_DELETE_TASK_ERROR,
  };
};

const removeDeleteTaskError = () => {
  return {
    type: types.REMOVE_DELETE_TASK_ERROR,
  };
};

const throwFetchAllTasksError = () => {
  return {
    type: types.THROW_FETCH_ALL_TASKS_ERROR,
  };
};

const throwFetchTasksTodayError = () => {
  return {
    type: types.THROW_FETCH_TASKS_TODAY_ERROR,
  };
};

const throwFetchTasksUpcomingError = () => {
  return {
    type: types.THROW_FETCH_TASKS_UPCOMING_ERROR,
  };
};

const throwCreateProjectError = (responseData) => {
  const errors = {};

  if (responseData.errors) {
    const fields = Object.keys(responseData.errors);

    fields.forEach((field) => {
      errors[field] = responseData.errors[field].message;
    });

    return {
      type: types.THROW_CREATE_PROJECT_ERROR,
      payload: errors,
    };
  }
};

const removeCreateProjectError = () => {
  return {
    type: types.REMOVE_CREATE_PROJECT_ERROR,
  };
};

const throwDeleteProjectError = () => {
  return {
    type: types.THROW_DELETE_PROJECT_ERROR,
  };
};

const removeDeleteProjectError = () => {
  return {
    type: types.REMOVE_DELETE_PROJECT_ERROR,
  };
};
export {
  throwSignUpErrors,
  throwLoginError,
  removeSignUpErrors,
  removeLoginError,
  throwLogoutError,
  removeLogoutError,
  throwTaskCreationError,
  removeTaskCreationError,
  throwDeleteTaskError,
  removeDeleteTaskError,
  throwFetchAllTasksError,
  throwFetchTasksTodayError,
  throwFetchTasksUpcomingError,
  throwCreateProjectError,
  removeCreateProjectError,
  throwDeleteProjectError,
  removeDeleteProjectError,
};
