import { createSelector } from "reselect";
import moment from "moment";

const getTasksUpcoming = createSelector(
  (state) => state.allTasks,

  (allTasks) => {
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

export { getTasksUpcoming };
