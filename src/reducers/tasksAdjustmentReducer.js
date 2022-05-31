import produce from "immer";
import types from "../actions/types.js";

const initial = {
  allTasks: {
    filters: {},
    sort: {},
  },
  tasksToday: {
    filters: {},
    sort: {},
  },
  tasksUpcoming: {
    filters: {},
    sort: {},
  },
  projects: {
    byId: {},
  },
};
/* without immer
 case types.ADJUST_ALL_TASKS: {
      const adjustmentObject = action.payload;
      const newState = {
        ...state,
        allTasks: {
          ...state.allTasks,
        },
      };
      const keys = Object.keys(adjustmentObject);
      keys.forEach((key) => {
        newState.allTasks[key] = adjustmentObject[key];
      });
      return newState;
    }
    */

//adjustmentObject is an object where key is the adjustment like filter and sort and value is the value object of that key
const addAdjustments = (baseState, adjustmentObject, taskType) => {
  return produce(baseState, (draftState) => {
    const adjustmentProperties = Object.keys(adjustmentObject);

    adjustmentProperties.forEach((adjustmentProperty) => {
      draftState[taskType][adjustmentProperty] =
        adjustmentObject[adjustmentProperty];
    });
  });
};

const addAdjustmentsProjects = (baseState, adjustmentObject, projectId) => {
  return produce(baseState, (draftState) => {
    const adjustmentProperties = Object.keys(adjustmentObject);

    adjustmentProperties.forEach((adjustmentProperty) => {
      if (!draftState.projects.byId[projectId]) {
        draftState.projects.byId[projectId] = {
          filters: {},
          sort: {},
        };
      }
      console.log(adjustmentObject[adjustmentProperty]);
      draftState.projects.byId[projectId][adjustmentProperty] =
        adjustmentObject[adjustmentProperty];
    });
  });
};

const tasksAdjustmentReducer = (state = initial, action) => {
  switch (action.type) {
    case types.ADJUST_ALL_TASKS: {
      const adjustmentObject = action.payload;
      return addAdjustments(state, adjustmentObject, "allTasks");
    }
    case types.ADJUST_TASKS_TODAY: {
      const adjustmentObject = action.payload;
      return addAdjustments(state, adjustmentObject, "tasksToday");
    }
    case types.ADJUST_TASKS_UPCOMING: {
      const adjustmentObject = action.payload;
      return addAdjustments(state, adjustmentObject, "tasksUpcoming");
    }
    case types.ADJUST_TASKS_PROJECT: {
      const { projectId, adjustObject: adjustmentObject } = action.payload;

      return addAdjustmentsProjects(state, adjustmentObject, projectId);
    }
    default:
      return state;
  }
};

export default tasksAdjustmentReducer;
