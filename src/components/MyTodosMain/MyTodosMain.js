import React from "react";
import { useSelector } from "react-redux";

import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";

import ErrorBox from "../ErrorBox/ErrorBox.js";
import TaskCard from "../TaskCard/TaskCard.js";
import TaskCompletedBox from "../TaskCompletedBox/TaskCompletedBox.js";
import useDelayUnmount from "../../hooks/useDelayUnmount.js";
import AddTaskButton from "../AddTaskButton/AddTaskButton.js";
import useRecentlyCompletedStatus from "./useRecentlyCompletedStatus.js";

import "./MyTodosMain.scss";

const MyTodosMain = ({ title, tasks, initialValues }) => {
  const defaultInitialValues = {
    title: "",
    description: "",
    priority: "",
    project: "",
    dueDate: "",
    completed: false,
  };

  const newInitialValues = { ...defaultInitialValues, ...initialValues };

  const [recentlyCompleted] = useRecentlyCompletedStatus();

  const deleteTaskError = useSelector((state) => {
    return state.deleteTaskError;
  });
  const deleteProjectError = useSelector((state) => {
    return state.deleteProjectErrorBackend;
  });

  //recentlyCompleted will be our mount indicator. If true, that means item should be mounted, if false, item should be unmounted
  const mountTaskCompletedBox = useDelayUnmount(recentlyCompleted, 500);

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
          />
        );
      } else {
        return null;
      }
    });
  }

  return (
    <main className="Todos__content">
      <div className="Todos__heading">
        <h1>{title}</h1>
        <div className="Todos__filter-and-sort">
          <button className="Todos__action-button">
            <FaFilter className="Todos__action-icon" />
            <span className="Todos__action-button-text">Filter</span>
          </button>
          <button className="Todos__action-button">
            <BiSortAlt2 className="Todos__action-icon" />
            <span className="Todos__action-button-text">Sort</span>
          </button>
        </div>
      </div>

      {tasks !== "error" ? (
        renderedTasks
      ) : (
        <p className="Todos__error-message color-error">
          Error loading tasks. Try again later.
        </p>
      )}

      <AddTaskButton role="create" initialValues={newInitialValues} />

      {/*component is actually removed from screen(unmounted) 500ms after the mount indicator recentlyCompleted is false. This means until it is actually unmounted, we can add a style that that will remove this item visually from screen(like opacity) within the 500ms we have until it is actually unmounted*/}
      {mountTaskCompletedBox && (
        <TaskCompletedBox mountIndicator={recentlyCompleted} />
      )}

      {deleteTaskError && <ErrorBox message="Unable to delete" />}

      {deleteProjectError && <ErrorBox message="Unable to delete" />}
    </main>
  );
};

export default MyTodosMain;
