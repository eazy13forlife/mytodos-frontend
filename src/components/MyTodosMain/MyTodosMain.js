import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";

import { initialValues } from "../TaskForm/initialValues.js";
import ErrorBox from "../ErrorBox/ErrorBox.js";
import Filters from "./Filters";
import Sort from "./Sort";
import TaskCompletedBox from "../TaskCompletedBox/TaskCompletedBox.js";
import useDelayUnmount from "../../hooks/useDelayUnmount.js";
import AddTaskButton from "../AddTaskButton/AddTaskButton.js";
import useRecentlyCompletedStatus from "./useRecentlyCompletedStatus.js";
import RenderedTasks from "./RenderedTasks.js";
import "./MyTodosMain.scss";

const MyTodosMain = ({ title, tasks, updatedValues }) => {
  const updatedInitialValues = { ...initialValues, ...updatedValues };

  const [buttonClicked, setButtonClicked] = useState(false);

  const [recentlyCompleted] = useRecentlyCompletedStatus();

  const deleteTaskError = useSelector((state) => {
    return state.deleteTaskError;
  });
  const deleteProjectError = useSelector((state) => {
    return state.deleteProjectErrorBackend;
  });

  //recentlyCompleted will be our mount indicator. If true, that means item should be mounted, if false, item should be unmounted
  const mountTaskCompletedBox = useDelayUnmount(recentlyCompleted, 500);

  return (
    <main className="Todos__content">
      <div className="Todos__heading">
        <h1>{title}</h1>
        <div className="Todos__filter-and-sort">
          <div className="Todos__adjustment-group">
            <button
              className="Todos__action-button"
              onClick={() => {
                setButtonClicked("filter");
              }}
            >
              <FaFilter className="Todos__action-icon" />
              <span className="Todos__action-button-text">Filter</span>
            </button>

            {buttonClicked === "filter" && (
              <Filters
                closeComponent={() => {
                  setButtonClicked(null);
                }}
              />
            )}
          </div>
          <div className="Todos__adjustment-group">
            <button
              className="Todos__action-button"
              onClick={() => {
                setButtonClicked("sort");
              }}
            >
              <BiSortAlt2 className="Todos__action-icon" />
              <span className="Todos__action-button-text">Sort</span>
            </button>

            {buttonClicked === "sort" && (
              <Sort
                closeComponent={() => {
                  setButtonClicked(null);
                }}
              />
            )}
          </div>
        </div>
      </div>

      {tasks !== "error" ? (
        <RenderedTasks tasks={tasks} recentlyCompleted={recentlyCompleted} />
      ) : (
        <p className="Todos__error-message color-error">
          Error loading tasks. Try again later.
        </p>
      )}

      <AddTaskButton role="create" initialValues={updatedInitialValues} />

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
