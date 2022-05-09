import axios from "axios";

import types from "./types.js";
import { fetchTasksToday } from "./tasksToday.js";
import { fetchTasksUpcoming } from "./tasksUpcoming.js";
import {
  throwTaskCreationError,
  removeTaskCreationError,
  throwDeleteTaskError,
  removeDeleteTaskError,
} from "./errors";

const fetchTasks = () => {
  return async (dispatch, getState) => {
    try {
      const userInfo = getState().userInfo;

      const allTasks = await axios.get("http://localhost:3000/tasks", {
        headers: {
          authorization: `bearer ${userInfo.token}`,
        },
      });

      dispatch({
        type: types.FETCH_ALL_TASKS,
        payload: allTasks.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

const createTask = (taskData) => {
  return async (dispatch, getState) => {
    try {
      const userInfo = getState().userInfo;

      const createdTask = await axios.post(
        "http://localhost:3000/tasks",
        taskData,
        {
          headers: {
            authorization: `bearer ${userInfo.token}`,
          },
        }
      );

      await dispatch(fetchTasks());

      if (taskData.dueDate) {
        await dispatch(fetchTasksToday());

        await dispatch(fetchTasksUpcoming());
      }

      dispatch(removeTaskCreationError());
    } catch (e) {
      dispatch(throwTaskCreationError(e.response.data));
    }
  };
};

const editTask = (taskId, taskData) => {
  return async (dispatch, getState) => {
    try {
      const userInfo = getState().userInfo;

      const data = await axios.patch(
        `http://localhost:3000/tasks/${taskId}`,
        taskData,
        {
          headers: {
            authorization: `bearer ${userInfo.token}`,
          },
        }
      );

      await dispatch(fetchTasks());

      if (taskData.dueDate) {
        await dispatch(fetchTasksToday());

        await dispatch(fetchTasksUpcoming());
      }

      dispatch(removeTaskCreationError());
    } catch (e) {
      dispatch(throwTaskCreationError(e.response.data));
    }
  };
};

const deleteTask = (taskId) => {
  return async (dispatch, getState) => {
    try {
      const userInfo = getState().userInfo;

      await axios.delete(`http://localhost:3000/tasks/${taskId}`, {
        headers: {
          authorization: `bearer ${userInfo.token}`,
        },
      });

      await dispatch(fetchTasks());

      await dispatch(fetchTasksToday());

      await dispatch(fetchTasksUpcoming());

      dispatch(removeDeleteTaskError());
    } catch (e) {
      dispatch(throwDeleteTaskError());

      return "error";
    }
  };
};

export { createTask, fetchTasks, editTask, deleteTask };
