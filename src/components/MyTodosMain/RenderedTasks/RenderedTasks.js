import React from "react";

import useGetTasks from "./useGetTasks.js";
import useAdjustedTasks from "../../../views/useAdjustedTasks.js";
import TaskCard from "../../TaskCard/TaskCard.js";
import useGetCurrentAdjustments from "../useGetCurrentAdjustments.js";

const RenderedTasks = ({ recentlyCompleted, onClick }) => {
  const allTasks = useGetTasks();

  const currentAdjustments = useGetCurrentAdjustments();

  const [adjustedTasks] = useAdjustedTasks(
    allTasks,
    currentAdjustments.filters,
    currentAdjustments.sort
  );

  let renderedTasks;

  if (adjustedTasks !== "error") {
    renderedTasks = adjustedTasks.map((task) => {
      const { title, priority, _id: id, description, project, dueDate } = task;

      //if a task was just checked for being completed, don't render it
      if (id !== recentlyCompleted) {
        return (
          <TaskCard
            title={title}
            priority={priority}
            dueDate={dueDate}
            description={description}
            project={project}
            key={id}
            id={id}
            onClick={onClick}
          />
        );
      }
    });
  } else {
    renderedTasks = null;
  }

  return renderedTasks;
};

export default RenderedTasks;
