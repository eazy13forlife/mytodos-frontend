import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import ErrorPage from "../../components/ErrorPage";

const Project = () => {
  const match = useRouteMatch();

  const projectId = match.params.projectId.substring(1);

  const projectTitle = useSelector((state) => {
    if (state.projects.byId[projectId]) {
      return state.projects.byId[projectId].title;
    }
  });

  const render = () => {
    if (!projectTitle) {
      return <ErrorPage message="This page does not exist" />;
    }
    return <GeneralLayout title={projectTitle} />;
  };

  return render();
};

export default Project;
