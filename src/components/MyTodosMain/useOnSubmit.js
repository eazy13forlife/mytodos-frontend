import React from "react";
import { useDispatch } from "react-redux";

import {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
} from "../../actions/";

const useOnSubmit = (matchObject, adjustmentObject, closeComponent) => {
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    switch (matchObject.path) {
      case "/projects/:projectId":
        dispatch(
          adjustTasksProject(
            matchObject.params.projectId.substring(1),
            adjustmentObject
          )
        );
        break;
      case "/today":
        dispatch(adjustTasksToday(adjustmentObject));
        break;
      case "/upcoming":
        dispatch(adjustTasksUpcoming(adjustmentObject));
        break;
      case "/inbox":
        dispatch(adjustAllTasks(adjustmentObject));
        break;
      default:
        break;
    }

    closeComponent();
  };

  return [onFormSubmit];
};

export default useOnSubmit;
