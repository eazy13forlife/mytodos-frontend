import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { makeGetProjectTasks } from "../../memoizedSelectors/projectsState.js";

const useGetProjectTasks = (projectId) => {
  const projectTitle = useSelector((state) => {
    if (state.projects.byId[projectId]) {
      return state.projects.byId[projectId].title;
    }
  });

  const getProjectTasksMemoizedSelector = useMemo(makeGetProjectTasks, []);

  const projectTasks = useSelector((state) => {
    return getProjectTasksMemoizedSelector(state, projectId);
  });

  return [projectTitle, projectTasks];
};

export default useGetProjectTasks;
