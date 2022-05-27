import React from "react";
import { useRouteMatch } from "react-router-dom";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import ErrorPage from "../../components/ErrorPage";
import useGetProjectTasks from "./useGetProjectTasks.js";
import "./index.scss";

const Project = () => {
  const match = useRouteMatch();

  const projectId = match.params.projectId.substring(1);

  const [projectTitle, projectTasks] = useGetProjectTasks(projectId);

  const render = () => {
    if (!projectTitle) {
      return <ErrorPage message="This page does not exist" />;
    }
    return (
      <GeneralLayout
        title={projectTitle}
        tasks={projectTasks}
        initialValues={{ project: projectId }}
      />
    );
  };

  return render();
};

export default Project;
