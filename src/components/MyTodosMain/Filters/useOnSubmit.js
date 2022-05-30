import React from "react";
import { useDispatch } from "react-redux";

import {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
} from "../../../actions/";

const useOnSubmit = (matchObject, filterValues, closeFilters) => {
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    switch (matchObject.path) {
      case "/projects/:projectId":
        dispatch(
          adjustTasksProject(matchObject.params.projectId.substring(1), {
            filters: filterValues,
          })
        );
        break;
      case "/today":
        dispatch(
          adjustTasksToday({
            filters: filterValues,
          })
        );
        break;
      case "/upcoming":
        dispatch(
          adjustTasksUpcoming({
            filters: filterValues,
          })
        );
        break;
      case "/inbox":
        dispatch(
          adjustAllTasks({
            filters: filterValues,
          })
        );
        break;
      default:
        break;
    }

    closeFilters();
  };

  return [onFormSubmit];
};

export default useOnSubmit;
