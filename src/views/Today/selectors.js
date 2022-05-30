import moment from "moment";
import { createSelector } from "reselect";

const getTasksToday = createSelector(
  (state) => state.allTasks,

  (allTasks) => {
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

export { getTasksToday };
