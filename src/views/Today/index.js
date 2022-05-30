import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import { getTasksToday } from "./selectors.js";
import useAdjustedTasks from "../useAdjustedTasks.js";
import GeneralLayout from "../GeneralLayout/GeneralLayout.js";

const Today = () => {
  const tasksToday = useSelector(getTasksToday);

  const currentFilters = useSelector((state) => {
    return state.tasksAdjustment.tasksToday.filters;
  });

  const currentSort = useSelector((state) => {
    return state.tasksAdjustment.tasksToday.sort;
  });

  const [adjustedTasks] = useAdjustedTasks(
    tasksToday,
    currentFilters,
    currentSort
  );

  return (
    <GeneralLayout
      title="Today"
      tasks={adjustedTasks}
      updatedValues={{ dueDate: moment().startOf("day").format("MM/DD/YYYY") }}
    />
  );
};

export default Today;
