import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import moment from "moment";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import "./index.scss";

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

const Upcoming = () => {
  const tasksUpcoming = useSelector(getTasksUpcoming);

  return <GeneralLayout title="Upcoming" tasks={tasksUpcoming} />;
};

export default Upcoming;
