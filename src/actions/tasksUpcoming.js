import axios from "axios";

import types from "./types.js";
import { throwFetchTasksUpcomingError } from "./errors.js";

const fetchTasksUpcoming = () => {
  return async (dispatch, getState) => {
    try {
      const userInfo = getState().userInfo;

      const response = await axios.get(
        "https://baffour-todos-backend.herokuapp.com?dueDate=upcoming",
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
    } catch (e) {
      dispatch(throwFetchTasksUpcomingError());
    }
  };
};

export { fetchTasksUpcoming };
