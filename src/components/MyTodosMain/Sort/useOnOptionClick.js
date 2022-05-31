import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import useAdjustmentFunction from "../useAdjustmentFunction.js";
import {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
} from "../../../actions/";
import { getTasksAdjustmentPath } from "../helperFunctions";
import { makeGetProjectAdjustments } from "../../../selectors/projectAdjustments.js";
import useGetCurrentAdjustments from "../useGetCurrentAdjustments.js";

const useOnOptionClick = () => {
  const match = useRouteMatch();

  const dispatch = useDispatch();

  const currentSortObject = useGetCurrentAdjustments().sort;

  const currentSortBy = Object.keys(currentSortObject)[0];

  const currentSortOrder = currentSortObject[currentSortBy];

  const [sortBy, setSortBy] = useState(currentSortBy || "");

  const [sortOrder, setSortOrder] = useState(currentSortOrder || "increasing");

  const adjustmentFunction = useAdjustmentFunction();
  //when sortBy or sortOrder value changes, dispatch to adjust global sort/filter values. This is pretty much our onSubmit function

  useEffect(() => {
    if (sortBy) {
      const sortObject = {
        [sortBy]: sortOrder,
      };

      adjustmentFunction({ sort: sortObject });
    } else {
      const sortObject = {};

      adjustmentFunction({ sort: sortObject });
    }
  }, [sortBy, sortOrder]);

  //when sortby is default reset order value to increasing if not already
  useEffect(() => {
    if (!sortBy) {
      if (sortOrder === "decreasing") {
        setSortOrder("increasing");
      }
    }
  }, [sortBy]);

  return { sortOrder, sortBy, setSortOrder, setSortBy };
};

export default useOnOptionClick;
