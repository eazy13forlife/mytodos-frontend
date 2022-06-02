import { createSelector } from "reselect";
import moment from "moment";

const getAllTasks = createSelector(
  (state) => state.allTasks,

  (allTasks) => {
    if (allTasks === "error") {
      return "error";
    }

    const newTasks = [];

    allTasks.allIds.forEach((id) => {
      newTasks.push(allTasks.byId[id]);
    });

    return newTasks;
  }
);

const getTasksToday = createSelector(
  (state) => state.allTasks,

  (allTasks) => {
    if (allTasks === "error") {
      return "error";
    }

    const tasksToday = [];

    const currentDate = moment().startOf("day").toISOString();

    allTasks.allIds.forEach((id) => {
      const taskDueDate = allTasks.byId[id].dueDate;

      if (taskDueDate && taskDueDate === currentDate) {
        tasksToday.push(allTasks.byId[id]);
      }
    });

    return tasksToday;
  }
);

const getTasksUpcoming = createSelector(
  (state) => state.allTasks,

  (allTasks) => {
    if (allTasks === "error") {
      return "error";
    }

    const tasksUpcoming = [];

    const currentDate = moment().startOf("day").toISOString();

    allTasks.allIds.forEach((id) => {
      const taskDueDate = allTasks.byId[id].dueDate;

      if (taskDueDate && taskDueDate > currentDate) {
        tasksUpcoming.push(allTasks.byId[id]);
      }
    });

    return tasksUpcoming;
  }
);

const getProjectTasks = createSelector(
  (state) => state.projects,

  (state) => state.allTasks,

  (state, projectId) => projectId,

  (allProjects, allTasks, projectId) => {
    if (allTasks === "error") {
      return "error";
    }

    const tasksArray = [];
    if (allProjects.byId[projectId]) {
      allProjects.byId[projectId].tasks.forEach((taskId) => {
        tasksArray.push(allTasks.byId[taskId]);
      });
    }

    return tasksArray;
  }
);

export { getAllTasks, getTasksToday, getTasksUpcoming, getProjectTasks };
