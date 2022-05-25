import React from "react";

import Modal from "../Modal/Modal.js";
import DeleteItemContent from "./DeleteItemContent.js";
import useDeleteTaskHook from "./useDeleteTaskHook.js";

const DeleteTaskModal = ({ title, id, closeModal }) => {
  const [onDeleteClick] = useDeleteTaskHook(id, closeModal);

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

export default DeleteTaskModal;
