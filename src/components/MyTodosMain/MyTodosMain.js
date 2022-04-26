import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import TaskCard from "../TaskCard/TaskCard.js";
import "./MyTodosMain.scss";

const MyTodosMain = ({ title, tasks }) => {
  const renderedTasks = tasks.map((task) => {
    const { title, priority, _id: id } = task;

    const dueDate = task.dueDate
      ? moment(task.dueDate).format("MMMM Do, YYYY")
      : "";

    return (
      <TaskCard
        title={title}
        priority={priority}
        dueDate={dueDate}
        key={id}
        id={id}
      />
    );
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
    </main>
  );
};

export default MyTodosMain;
