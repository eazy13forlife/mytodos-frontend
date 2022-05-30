import React from "react";
import { useSelector } from "react-redux";

import { getTasksUpcoming } from "./selectors";
import useAdjustedTasks from "../useAdjustedTasks.js";
import GeneralLayout from "../GeneralLayout/GeneralLayout.js";

const Upcoming = () => {
  const tasksUpcoming = useSelector(getTasksUpcoming);

  const currentFilters = useSelector((state) => {
    return state.tasksAdjustment.tasksUpcoming.filters;
  });

  const currentSort = useSelector((state) => {
    return state.tasksAdjustment.tasksUpcoming.sort;
  });

  const [adjustedTasks] = useAdjustedTasks(
    tasksUpcoming,
    currentFilters,
    currentSort
  );

  return <GeneralLayout title="Upcoming" tasks={adjustedTasks} />;
};

export default Upcoming;
