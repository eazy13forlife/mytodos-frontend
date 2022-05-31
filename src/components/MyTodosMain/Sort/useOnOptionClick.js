import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
} from "../../../actions/";
import { makeGetProjectAdjustments } from "../../../selectors/projectAdjustments.js";

const useOnOptionClick = () => {
  const match = useRouteMatch();

  const dispatch = useDispatch();

  const getProjectAdjustments = useMemo(makeGetProjectAdjustments, []);
  //initially, get the osrt Values. if it doesnt exist, (use use elector),return { value: "", displayName: "default" }, else look at sortOptions and return the one where value matches. DO the same with sortOrder
  let stateProperty;
  //tells us which stateProperty coincides with our current path
  switch (match.path) {
    case "/inbox":
      stateProperty = "allTasks";
      break;
    case "/today":
      stateProperty = "tasksToday";
      break;
    case "/upcoming":
      stateProperty = "tasksUpcoming";
      break;
    case "/projects/:projectId":
      stateProperty = "projects";
      break;
    default:
      break;
  }

  //grab all filters based on the stateProperty we are on. So if we are on /inbox stateProperty, we need to go to allTasks in our taskAdjustment state and choose filters. This selector will be used as the initial values for useState only. So either equal to something or nothing. We update the filters with setState however.
  const sort = useSelector((state) => {
    if (stateProperty !== "projects") {
      return state.tasksAdjustment[stateProperty].sort;
    } else {
      const projectId = match.params.projectId.substring(1);
      return getProjectAdjustments(state, projectId).sort;
    }
  });

  console.log(sort);
  const [sortBy, setSortBy] = useState({
    value: Object.keys(sort)[0],
    displayName: "default",
  });

  const [sortOrder, setSortOrder] = useState({
    value: "increasing",
    displayName: "increasing",
  });

  //when sortBy or sortOrder value changes, dispatch to adjust global sort/filter values. This is pretty much our onSubmit function
  useEffect(() => {
    if (sortBy.value) {
      const sortObject = {
        [sortBy.value]: sortOrder.value,
      };

      switch (match.path) {
        case "/inbox":
          return dispatch(adjustAllTasks({ sort: sortObject }));
        case "/today":
          return dispatch(adjustTasksToday({ sort: sortObject }));
        case "/upcoming":
          return dispatch(adjustTasksUpcoming({ sort: sortObject }));
        case "/projects/:projectId": {
          const projectId = match.params.projectId.substring(1);
          return dispatch(adjustTasksProject(projectId, { sort: sortObject }));
        }
        default:
          break;
      }
    }

    if (!sortBy.value) {
      const sortObject = {};

      switch (match.path) {
        case "/inbox":
          return dispatch(adjustAllTasks({ sort: sortObject }));
        case "/today":
          return dispatch(adjustTasksToday({ sort: sortObject }));
        case "/upcoming":
          return dispatch(adjustTasksUpcoming({ sort: sortObject }));
        case "/projects/:projectId": {
          const projectId = match.params.projectId.substring(1);
          return dispatch(adjustTasksProject(projectId, { sort: sortObject }));
        }
        default:
          break;
      }
    }
  }, [sortBy, sortOrder]);

  //when sortby is default reset order value to increasing if not already
  useEffect(() => {
    if (!sortBy.value) {
      if (sortOrder.value === "decreasing") {
        setSortOrder({
          value: "increasing",
          displayName: "increasing",
        });
      }
    }
  }, [sortBy]);

  return { sortOrder, sortBy, setSortOrder, setSortBy };
};

export default useOnOptionClick;
