import React from "react";

import { BsPlusLg } from "react-icons/bs";
import "./AddTaskButton.scss";
import withCreateTaskModal from "../HOC.js";

const AddTaskButton = ({ onClick }) => {
  return (
    <button className="AddTaskButton icon-text-button" onClick={onClick}>
      <span className="icon-text-button__icon-wrapper">
        <BsPlusLg className="icon-text-button__icon" />
      </span>
      <span className="icon-text-button__text">Add task</span>
    </button>
  );
};

export default withCreateTaskModal(AddTaskButton);
