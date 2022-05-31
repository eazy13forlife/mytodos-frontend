import moment from "moment";

const filterTasks = (tasksArray, filters) => {
  const filterKeys = Object.keys(filters);

  if (!filterKeys.length) {
    return [...tasksArray];
  }

  const adjustedTasks = [];

  //for each task, look at all the filters that need to match. If match, we increment filters match.If don't match, break out of loop. At end of loop if filters match equals all the match keys, we push task to our adjustedTasks.
  for (let i = 0; i < tasksArray.length; i++) {
    const task = tasksArray[i];

    let filtersMatch = 0;

    for (let j = 0; j < filterKeys.length; j++) {
      const filterKey = filterKeys[j];

      const filterValue = filters[filterKey];

      if (filterKey === "dueDate") {
        const currentDay = moment().startOf("day").toISOString();
        if (filterValue === "today") {
          if (task[filterKey] !== currentDay) {
            break;
          }
        } else if (filterValue === "upcoming") {
          if (task[filterKey] <= currentDay) {
            break;
          }
        }
      } else {
        if (task[filterKey] !== filterValue) {
          break;
        }
      }

      filtersMatch += 1;
    }

    if (filtersMatch === filterKeys.length) {
      adjustedTasks.push(task);
    }
  }

  return adjustedTasks;
};

const sortTasks = (tasksArray, sort) => {
  const sortKey = Object.keys(sort)[0];

  const newTasks = [...tasksArray];

  console.log(newTasks);
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

export { filterTasks, sortTasks };
