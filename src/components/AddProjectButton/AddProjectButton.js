import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import withUpdateProjectModal from "../../HOC/withUpdateProjectModal.js";

const AddProjectButton = ({ onClick }) => {
  return (
    <button className="AddProjectButton icon-text-button-2" onClick={onClick}>
      <span className="icon-text-button-2__icon-wrapper">
        <AiOutlinePlus className="icon-text-button-2__icon" />
      </span>
      <span className="icon-text-button-2__text">Add Project</span>
    </button>
  );
};

export default withUpdateProjectModal(AddProjectButton);
