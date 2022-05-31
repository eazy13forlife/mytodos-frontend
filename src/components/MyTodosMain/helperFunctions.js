//takes current path and returns the key in tasksAdjustment state that holds the data we want
const getTasksAdjustmentPath = (currentPath) => {
  //tells us which stateProperty coincides with our current path
  switch (currentPath) {
    case "/inbox":
      return "allTasks";
    case "/today":
      return "tasksToday";
    case "/upcoming":
      return "tasksUpcoming";
    case "/projects/:projectId":
      return "projects";
    default:
      break;
  }
};

export { getTasksAdjustmentPath };
