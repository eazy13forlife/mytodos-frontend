import types from "../actions/types.js";
import produce from "immer";

const tasks = {
  byId: {},
  allIds: [],
};
const tasksReducer = (state = tasks, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TASKS: {
      const tasksArray = action.payload;

      const newTasks = {
        byId: {},
        allIds: [],
      };

      tasksArray.forEach((task) => {
        newTasks.byId[task._id] = task;
        newTasks.allIds.push(task._id);
      });

      return newTasks;
    }
    case types.CREATE_TASK: {
      const task = action.payload;

      const newTasks = {
        ...state,
        byId: {
          ...state.byId,
          [task._id]: task,
        },
        allIds: [...state.allIds, task._id],
      };

      return newTasks;
    }
    case types.EDIT_TASK: {
      const task = action.payload;

      const newTasks = {
        ...state,
        byId: {
          ...state.byId,
          [task._id]: task,
        },
      };

      return newTasks;
    }
    case types.DELETE_TASK: {
      const task = action.payload;

      return produce(state, (draftState) => {
        delete draftState.byId[task._id];
        draftState.allIds = draftState.allIds.filter((id) => id !== task._id);
      });
    }
    case types.THROW_FETCH_ALL_TASKS_ERROR:
      return "error";
    default:
      return state;
  }
};

export default tasksReducer;
