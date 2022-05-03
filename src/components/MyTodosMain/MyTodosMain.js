import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import TaskCard from "../TaskCard/TaskCard.js";
import TaskCompletedBox from "../TaskCompletedBox/TaskCompletedBox.js";
import useDelayUnmount from "../../hooks/useDelayUnmount.js";
import { onTaskCompletion } from "../../actions/";

import "./MyTodosMain.scss";

const MyTodosMain = ({ title, tasks }) => {
  const dispatch = useDispatch();

  const recentlyCompleted = useSelector((state) => {
    return state.recentlyCompleted;
  });

  //recentlyCompleted will be our mount indicator. If true, that means item should be mounted, if false, item should be unmounted
  const mountTaskCompletedBox = useDelayUnmount(recentlyCompleted, 500);

  useEffect(() => {
    //if recentlyCompleted is still true after 10 seconds of being set to completed then just mark it as completed for real.This will result in the taskCompletedbox not showing anymore
    const timerId = setTimeout(() => {
      if (recentlyCompleted) {
        dispatch(onTaskCompletion());
      }
    }, 10000);

    return () => {
      clearTimeout(timerId);
    };
  }, [recentlyCompleted]);

  const renderedTasks = tasks.map((task) => {
    const { title, priority, _id: id } = task;

    const dueDate = task.dueDate
      ? moment(task.dueDate).format("MMMM Do, YYYY")
      : "";

    //if a task was just checked for being completed, don't render it
    if (id !== recentlyCompleted) {
      return (
        <TaskCard
          title={title}
          priority={priority}
          dueDate={dueDate}
          key={id}
          id={id}
        />
      );
    } else {
      return null;
    }
  });

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

      {renderedTasks}

      {/*component is actually removed from screen(unmounted) 500ms after the mount indicator recentlyCompleted is false. This means until it is actually unmounted, we can add a style that that will remove this item visually from screen(like opacity) within the 500ms we have until it is actually unmounted*/}
      {mountTaskCompletedBox && (
        <TaskCompletedBox mountIndicator={recentlyCompleted} />
      )}
    </main>
  );
};

export default MyTodosMain;
