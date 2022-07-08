import types from "../actions/types.js";
import produce from "immer";

const projects = {
  byId: {},
  allIds: [],
};

const projectsReducer = (state = projects, action) => {
  switch (action.type) {
    //FOR PROJECTS SPECIFICALLY
    case types.CREATE_PROJECT: {
      const project = action.payload;

      //each project needs a task array where we put id of all of its tasks
      project.tasks = [];

      const newState = produce(state, (draftState) => {
        draftState.byId[project._id] = project;
        draftState.allIds.push(project._id);
      });

      return newState;
    }
    case types.FETCH_PROJECTS: {
      const projects = action.payload;

      const newState = {
        byId: {},
        allIds: [],
      };

      projects.forEach((project) => {
        newState.byId[project._id] = project;

        //each project needs a task array where we put id of all of its tasks
        newState.byId[project._id].tasks = [];

        newState.allIds.push(project._id);
      });

      return newState;
    }
    case types.EDIT_PROJECT: {
      const project = action.payload;

      project.tasks = [...state.byId[project._id].tasks];

      const newState = produce(state, (draftState) => {
        draftState.byId[project._id] = project;
      });

      return newState;
    }
    case types.DELETE_PROJECT: {
      const projectId = action.payload;

      const newState = produce(state, (draftState) => {
        delete draftState.byId[projectId];
        draftState.allIds = draftState.allIds.filter((id) => id !== projectId);
      });

      return newState;
    }
    //FOR TASKS ARRAY SPECIFICALLY
    case types.CREATE_TASK: {
      console.log("i");
      const task = action.payload;

      if (task.project) {
        const { project: projectId, _id: taskId } = task;

        const newState = produce(state, (draftState) => {
          draftState.byId[projectId].tasks.push(taskId);
        });

        return newState;
      }

      return state;
    }
    case types.FETCH_ALL_TASKS: {
      const tasks = action.payload;

      const newState = produce(state, (draftState) => {
        tasks.forEach((task) => {
          if (task.project) {
            const { project: projectId, _id: taskId } = task;

            draftState.byId[projectId].tasks.push(taskId);
          }
        });
      });

      return newState;
    }
    case types.EDIT_TASK: {
      const { originalTask, editedTask } = action.payload;

      //if originalTask did not have project but edited task has project, add this task to the project of the new task,
      if (!originalTask.project && editedTask.project) {
        return produce(state, (draftState) => {
          draftState.byId[editedTask.project].tasks.push(editedTask._id);
        });
      }
      //if originalTask had project but edited task did not have project, remove this task from its original project it was part of
      if (originalTask.project && !editedTask.project) {
        return produce(state, (draftState) => {
          draftState.byId[originalTask.project].tasks = draftState.byId[
            originalTask.project
          ].tasks.filter((id) => id !== editedTask._id);
        });
      }

      //if both exists, delete task from originaltask project tasks array and add task to task array of newtask project id since that is where it belongs now
      if (originalTask.project && editedTask.project) {
        return produce(state, (draftState) => {
          draftState.byId[originalTask.project].tasks = draftState.byId[
            originalTask.project
          ].tasks.filter((id) => id !== originalTask._id);

          draftState.byId[editedTask.project].tasks.push(editedTask._id);
        });
      }

      return state;
    }
    case types.DELETE_TASK: {
      const task = action.payload;

      if (task.project) {
        return produce(state, (draftState) => {
          draftState.byId[task.project].tasks = draftState.byId[
            task.project
          ].tasks.filter((id) => id !== task._id);
        });
      }

      return state;
    }
    default:
      return state;
  }
};

export default projectsReducer;
