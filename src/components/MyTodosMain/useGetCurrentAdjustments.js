import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { getTasksAdjustmentPath } from "./helperFunctions";
import { makeGetProjectAdjustments } from "../../selectors/projectAdjustments.js";

const useGetCurrentAdjustments = () => {
  const match = useRouteMatch();

  const getProjectAdjustments = useMemo(makeGetProjectAdjustments, []);

  let statePath = getTasksAdjustmentPath(match.path);

  //grab the adjustment object based on the stateProperty we are on. So if we are on /inbox path, the statePath is allTasks in our taskAdjustment state and we select that whole adjustment object.
  const currentAdjustments = useSelector((state) => {
    if (statePath !== "projects") {
      return state.tasksAdjustment[statePath];
    } else if (statePath === "projects") {
      const projectId = match.params.projectId.substring(1);

      return getProjectAdjustments(state, projectId);
    }
  });

  return currentAdjustments;
};

export default useGetCurrentAdjustments;
