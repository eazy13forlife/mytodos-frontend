import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import useAdjustedTasks from "../useAdjustedTasks.js";
import { makeGetProjectAdjustments } from "../../selectors/projectAdjustments.js";
import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import ErrorPage from "../../components/ErrorPage";
import useGetProjectTasks from "./useGetProjectTasks.js";

const Project = () => {
  const match = useRouteMatch();

  const projectId = match.params.projectId.substring(1);

  const [projectTitle, projectTasks] = useGetProjectTasks(projectId);

  const projectAdjustmentsSelector = useMemo(makeGetProjectAdjustments, []);

  const { filters, sort } = useSelector((state) => {
    return projectAdjustmentsSelector(state, projectId);
  });

  const [adjustedTasks] = useAdjustedTasks(projectTasks, filters, sort);

  const render = () => {
    if (!projectTitle) {
      return <ErrorPage message="This page does not exist" />;
    }
    return (
      <GeneralLayout
        title={projectTitle}
        tasks={adjustedTasks}
        updatedValues={{ project: projectId }}
      />
    );
  };

  return render();
};

export default Project;
