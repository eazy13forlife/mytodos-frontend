import produce from "immer";
import types from "../actions/types.js";

let initialState;

const tasksAdjustment = window.localStorage.getItem("tasksAdjustment");

if (!tasksAdjustment) {
  initialState = {
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
} else {
  initialState = JSON.parse(tasksAdjustment);
}

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

      draftState.projects.byId[projectId][adjustmentProperty] =
        adjustmentObject[adjustmentProperty];
    });
  });
};

const tasksAdjustmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADJUST_ALL_TASKS: {
      const adjustmentObject = action.payload;

      const newState = addAdjustments(state, adjustmentObject, "allTasks");

      window.localStorage.setItem("tasksAdjustment", JSON.stringify(newState));

      return newState;
    }
    case types.ADJUST_TASKS_TODAY: {
      const adjustmentObject = action.payload;

      const newState = addAdjustments(state, adjustmentObject, "tasksToday");

      window.localStorage.setItem("tasksAdjustment", JSON.stringify(newState));

      return newState;
    }
    case types.ADJUST_TASKS_UPCOMING: {
      const adjustmentObject = action.payload;

      const newState = addAdjustments(state, adjustmentObject, "tasksUpcoming");

      window.localStorage.setItem("tasksAdjustment", JSON.stringify(newState));

      return newState;
    }
    case types.ADJUST_TASKS_PROJECT: {
      const { projectId, adjustObject: adjustmentObject } = action.payload;

      const newState = addAdjustmentsProjects(
        state,
        adjustmentObject,
        projectId
      );

      window.localStorage.setItem("tasksAdjustment", JSON.stringify(newState));

      return newState;
    }
    default:
      return state;
  }
};

export default tasksAdjustmentReducer;
