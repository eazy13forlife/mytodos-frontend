import moment from "moment";

const filterTasks = (tasksArray, filters) => {
  const filterKeys = Object.keys(filters);

  if (!filterKeys.length) {
    return [...tasksArray];
  }

  const adjustedTasks = [];

  //for each task, look at all the filters that need to match. If all match, push task to adjustedTasks
  for (let i = 0; i < tasksArray.length; i++) {
    const task = tasksArray[i];

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
      }

      if (task[filterKey] !== filterValue) {
        break;
      }
    }

    adjustedTasks.push(task);
  }

  return adjustedTasks;
};

export default filterTasks;
