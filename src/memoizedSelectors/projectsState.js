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

//returns memoized selector function that gets all tasks of a specific project
const makeGetProjectTasks = () => {
  return createSelector(
    (state) => state.projects,
    (state) => state.allTasks,
    (state, projectId) => projectId,
    (allProjects, allTasks, projectId) => {
      const tasksArray = [];
      if (allProjects.byId[projectId]) {
        allProjects.byId[projectId].tasks.forEach((taskId) => {
          tasksArray.push(allTasks.byId[taskId]);
        });
      }
      return tasksArray;
    }
  );
};

export { getAllProjects, makeGetProjectTasks };
