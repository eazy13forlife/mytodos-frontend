import React from "react";

import Modal from "../Modal/Modal.js";
import DeleteItemContent from "./DeleteItemContent.js";
import useDeleteProjectHook from "./useDeleteProjectHook.js";

const DeleteProjectModal = ({ title, id, closeModal }) => {
  const [onDeleteClick] = useDeleteProjectHook(id, closeModal);

  return (
    <Modal width="45rem">
      <DeleteItemContent
        title={title}
        onDeleteClick={onDeleteClick}
        closeModal={closeModal}
      />
    </Modal>
  );
};

export default DeleteProjectModal;
