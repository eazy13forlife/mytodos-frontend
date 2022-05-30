import React from "react";
import { useSelector } from "react-redux";

import useAdjustedTasks from "../useAdjustedTasks.js";
import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import { getAllTasks } from "./selectors.js";
import "./index.scss";

const Inbox = () => {
  const allTasks = useSelector(getAllTasks);

  const currentFilters = useSelector((state) => {
    return state.tasksAdjustment.allTasks.filters;
  });

  const currentSort = useSelector((state) => {
    return state.tasksAdjustment.allTasks.sort;
  });

  const [adjustedTasks] = useAdjustedTasks(
    allTasks,
    currentFilters,
    currentSort
  );

  return <GeneralLayout title="Inbox" tasks={adjustedTasks} />;
};

export default Inbox;
