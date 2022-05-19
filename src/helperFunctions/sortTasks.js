const sortTasks = (tasksArray, sort) => {
  const sortKey = Object.keys(sort)[0];

  const newTasks = [...tasksArray];

  if (!sortKey) {
    return newTasks;
  }

  const sortValue = sort[sortKey];

  newTasks.sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (sortValue === "increasing") {
      if (aValue > bValue) {
        return 1;
      } else if (aValue < bValue) {
        return -1;
      } else {
        return 0;
      }
    }

    if (sortValue === "decreasing") {
      if (aValue > bValue) {
        return -1;
      } else if (aValue < bValue) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return newTasks;
};

export default sortTasks;
