import axios from "axios";

import types from "./types.js";

const fetchTasksUpcoming = () => {
  return async (dispatch, getState) => {
    const userInfo = getState().userInfo;

    const response = await axios.get(
      "http://localhost:3000/tasks?dueDate=upcoming",
      {
        headers: {
          authorization: `bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({
      type: types.FETCH_TASKS_UPCOMING,
      payload: response.data,
    });
  };
};

export { fetchTasksUpcoming };
