import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../Modal/Modal.js";
import AddProjectContent from "../AddProjectContent/AddProjectContent.js";

const AddProjectButton = () => {
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  return (
    <>
      <button
        className="AddProjectButton icon-text-button-2"
        onClick={() => {
          setShowAddProjectModal(true);
        }}
      >
        <span className="icon-text-button-2__icon-wrapper">
          <AiOutlinePlus className="icon-text-button-2__icon" />
        </span>
        <span className="icon-text-button-2__text">Add Project</span>
      </button>

      {showAddProjectModal && (
        <Modal width="60rem">
          <AddProjectContent showModal={setShowAddProjectModal} />
        </Modal>
      )}
    </>
  );
};

export default AddProjectButton;
