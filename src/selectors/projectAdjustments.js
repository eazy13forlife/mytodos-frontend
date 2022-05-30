import { createSelector } from "reselect";

const makeGetProjectAdjustments = () => {
  return createSelector(
    (state) => state.tasksAdjustment.projects,

    (state, projectId) => projectId,

    (allProjects, projectId) => {
      if (allProjects.byId[projectId]) {
        return {
          filters: allProjects.byId[projectId].filters,
          sort: allProjects.byId[projectId].sort,
        };
      } else {
        return {
          filters: {},
          sort: {},
        };
      }
    }
  );
};

export { makeGetProjectAdjustments };
