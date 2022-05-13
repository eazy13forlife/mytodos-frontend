import React from "react";

import { BsPlusLg } from "react-icons/bs";
import "./AddTaskButton.scss";
import withCreateTaskModal from "../HOC.js";

const AddTaskButton = ({ onClick }) => {
  return (
    <button className="AddTaskButton" onClick={onClick}>
      <span className="AddTaskButton__icon-wrapper">
        <BsPlusLg className="AddTaskButton__icon" />
      </span>
      <span className="AddTaskButton__text">Add task</span>
    </button>
  );
};

export default withCreateTaskModal(AddTaskButton);
