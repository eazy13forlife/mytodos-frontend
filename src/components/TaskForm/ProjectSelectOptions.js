import React from "react";
import { useSelector } from "react-redux";

import { getAllProjects } from "../../memoizedSelectors/projectsState.js";

const ProjectSelectOptions = () => {
  const { projectsArray } = useSelector(getAllProjects);

  const renderedProjectOptions = projectsArray.map((project) => {
    const { _id: projectId, title: projectTitle } = project;

    return (
      <option
        value={projectId}
        className="TaskForm__select-value"
        key={projectId}
      >
        {projectTitle}
      </option>
    );
  });

  return renderedProjectOptions;
};

export default ProjectSelectOptions;
