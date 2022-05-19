import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import filterTasks from "../../helperFunctions/filterTasks.js";
import sortTasks from "../../helperFunctions/sortTasks.js";
import "./index.scss";

const getAllTasks = createSelector(
  (state) => state.allTasks,

  (allTasks) => {
    const newTasks = [];

    allTasks.allIds.forEach((id) => {
      newTasks.push(allTasks.byId[id]);
    });

    return newTasks;
  }
);

const Inbox = () => {
  const [adjustedTasks, setAdjustedTasks] = useState([]);

  const allTasks = useSelector(getAllTasks);

  const { filters, sort } = useSelector((state) => {
    return state.tasksAdjustment.allTasks;
  });

  //whenever allTasks,or filters,or sort changes we need to re-filter and re-sort. Well, re-sort for sure, but what about re-filter?
  useEffect(() => {
    if (allTasks.length) {
      const filteredTasks = filterTasks(allTasks, filters);

      const sortedFilteredTasks = sortTasks(filteredTasks, sort);

      setAdjustedTasks(sortedFilteredTasks);
    }
  }, [allTasks, filters, sort]);

  return <GeneralLayout title="Inbox" tasks={adjustedTasks} />;
};

export default Inbox;
