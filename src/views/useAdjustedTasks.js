import { useEffect, useState } from "react";

import { filterTasks, sortTasks } from "./helperFunctions.js";

const useAdjustedTasks = (allTasks, currentFilters, currentSort) => {
  const [adjustedTasks, setAdjustedTasks] = useState([]);
  //whenever allTasks,or filters,or sort changes we need to re-filter and re-sort. Well, re-sort for sure, but what about re-filter?
  useEffect(() => {
    if (allTasks === "error") {
      return setAdjustedTasks("error");
    }

    const filteredTasks = filterTasks(allTasks, currentFilters);

    const sortedFilteredTasks = sortTasks(filteredTasks, currentSort);

    setAdjustedTasks(sortedFilteredTasks);
  }, [allTasks, currentFilters, currentSort]);

  return [adjustedTasks];
};

export default useAdjustedTasks;
