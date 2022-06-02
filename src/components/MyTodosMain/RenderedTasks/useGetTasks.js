import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  getAllTasks,
  getTasksToday,
  getTasksUpcoming,
  getProjectTasks,
} from "./selectors.js";

const useGetTasks = () => {
  const match = useRouteMatch();

  switch (match.path) {
    case "/inbox":
      return useSelector(getAllTasks);
    case "/today":
      return useSelector(getTasksToday);
    case "/upcoming":
      return useSelector(getTasksUpcoming);
    case "/projects/:projectId": {
      const projectId = match.params.projectId.substring(1);
      return useSelector((state) => {
        return getProjectTasks(state, projectId);
      });
    }
    default:
      return [];
  }
};

export default useGetTasks;
