import React from "react";
import { BsPencil } from "react-icons/bs";

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
