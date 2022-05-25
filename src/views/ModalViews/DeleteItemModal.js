import React from "react";

import Modal from "../../components/Modal/Modal.js";
import DeleteItemContent from "../../components/DeleteItemContent/DeleteItemContent.js";

const DeleteItemModal = ({ title, id, closeModal }) => {
  return (
    <Modal width="45rem">
      <DeleteItemContent title={title} id={id} closeModal={closeModal} />
    </Modal>
  );
};

export default DeleteItemModal;
