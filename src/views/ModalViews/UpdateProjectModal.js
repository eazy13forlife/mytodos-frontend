import React from "react";

import Modal from "../../components/Modal/Modal.js";
import UpdateProjectContent from "../../components/UpdateProjectContent/UpdateProjectContent.js";

const UpdateProjectModal = ({ role, initialValues, closeModal, id }) => {
  return (
    <Modal width="60rem">
      <UpdateProjectContent
        role={role}
        initialValues={initialValues}
        closeModal={closeModal}
        id={id}
      />
    </Modal>
  );
};

export default UpdateProjectModal;
