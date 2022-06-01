import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsPencil } from "react-icons/bs";

import { editTask, removeTaskCreationError } from "../../actions";
import Modal from "../Modal/Modal.js";
import TaskForm from "../TaskForm/TaskForm.js";
import withCreateTaskModal from "../../HOC/withUpdateTaskModal.js";

const EditTaskButton = ({ onClick }) => {
  return (
    <button
      className="EditTaskButton TaskCard__button-pencil icon-button"
      onClick={onClick}
    >
      <BsPencil className="TaskCard__icon" />
    </button>
  );
};

export default withCreateTaskModal(EditTaskButton);
