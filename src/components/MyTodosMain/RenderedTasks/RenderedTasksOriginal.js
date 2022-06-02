import React from "react";

import TaskCard from "../../TaskCard/TaskCard.js";
const RenderedTasks = ({ tasks, recentlyCompleted, onClick }) => {
  let renderedTasks;

  if (tasks !== "error") {
    renderedTasks = tasks.map((task) => {
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
    return null;
  }

  return renderedTasks;
};

export default RenderedTasks;
