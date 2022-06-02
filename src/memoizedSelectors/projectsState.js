import { createSelector } from "reselect";

//memoized selector function that returns all of our projects
const getAllProjects = createSelector(
  (state) => state.projects,

  (projects) => {
    const projectsArray = [];

    projects.allIds.forEach((id) => {
      projectsArray.push(projects.byId[id]);
    });

    return { projects, projectsArray };
  }
);

export { getAllProjects };
