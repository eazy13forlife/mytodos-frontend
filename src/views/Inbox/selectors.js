import { createSelector } from "reselect";

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

export { getAllTasks };
