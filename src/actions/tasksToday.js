import types from "./types.js";
import axios from "axios";

const fetchTasksToday = () => {
  return async (dispatch, getState) => {
    const userInfo = getState().userInfo;

    const response = await axios.get(
      "http://localhost:3000/tasks?dueDate=today",
      {
        headers: {
          authorization: `bearer ${userInfo.token}`,
        },
      }
    );

    dispatch({
      type: types.FETCH_TASKS_TODAY,
      payload: response.data,
    });
  };
};

export { fetchTasksToday };
