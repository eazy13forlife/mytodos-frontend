import React from "react";

import { BsPlusLg } from "react-icons/bs";
import withUpdateTaskModal from "../../HOC/withUpdateTaskModal.js";
import "./CreateTaskButton.scss";

const CreateTaskButton = ({ onClick, buttonClass, iconClass }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <BsPlusLg className={iconClass} />
    </button>
  );
};

export default withUpdateTaskModal(CreateTaskButton);
