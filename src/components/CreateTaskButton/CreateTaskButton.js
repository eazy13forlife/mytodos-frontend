import React from "react";

import { BsPlusLg } from "react-icons/bs";
import withCreateTaskModal from "../HOC.js";
import "./CreateTaskButton.scss";

const CreateTaskButton = ({ onClick, buttonClass, iconClass }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <BsPlusLg className={iconClass} />
    </button>
  );
};

export default withCreateTaskModal(CreateTaskButton);
