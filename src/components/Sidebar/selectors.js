import { createSelector } from "reselect";
import moment from "moment";

const getCount = createSelector(
  (state) => state.allTasks,
  (allTasks) => {
    let todayCount;
    let upcomingCount;
    if (allTasks !== "error") {
      todayCount = 0;

      upcomingCount = 0;

      const currentDate = moment().startOf("day").toISOString();

      const taskObjects = Object.values(allTasks.byId);

      taskObjects.forEach((task) => {
        if (task.dueDate && task.dueDate === currentDate) {
          todayCount += 1;
        } else if (task.dueDate && task.dueDate > currentDate) {
          upcomingCount += 1;
        }
      });
    } else {
      todayCount = 0;
      upcomingCount = 0;
    }

    return { todayCount, upcomingCount };
  }
);

export { getCount };
