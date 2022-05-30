import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { makeGetProjectAdjustments } from "../../../selectors/projectAdjustments.js";
const useFilterValues = (matchObject) => {
  const currentPath = matchObject.path;

  const getProjectAdjustments = useMemo(makeGetProjectAdjustments, []);

  let stateProperty;
  //tells us which stateProperty coincides with our current path
  switch (currentPath) {
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
  const filters = useSelector((state) => {
    if (stateProperty !== "projects") {
      return state.tasksAdjustment[stateProperty].filters;
    } else {
      const projectId = matchObject.params.projectId.substring(1);
      return getProjectAdjustments(state, projectId).filters;
    }
  });

  const [filterValues, setFilterValues] = useState(filters);

  const updateFilters = (e) => {
    const filterName = e.target.name;

    const filterValue = e.target.value;

    //if we clicked no value for a certain filter, if that filter currently exists in our filterValues,remove it.
    if (!filterValue) {
      const newValues = { ...filterValues };
      delete newValues[filterName];
      setFilterValues(newValues);
    } else if (filterValues) {
      setFilterValues({
        ...filterValues,
        [filterName]: filterValue,
      });
    }
  };

  return [filterValues, updateFilters];
};

export default useFilterValues;
