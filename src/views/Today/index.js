import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { createSelector } from "reselect";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import "./index.scss";

const getTasksToday = createSelector(
  (state) => state.allTasks,

  (allTasks) => {
    const tasksToday = [];

    const currentDate = moment().startOf("day").toISOString();
    console.log(allTasks);
    allTasks.allIds.forEach((id) => {
      const taskDueDate = allTasks.byId[id].dueDate;

      if (taskDueDate && taskDueDate === currentDate) {
        tasksToday.push(allTasks.byId[id]);
      }
    });

    return tasksToday;
  }
);

const Today = () => {
  const tasksToday = useSelector(getTasksToday);
  console.log(tasksToday);
  return <GeneralLayout title="Today" tasks={tasksToday} />;
};

export default Today;
