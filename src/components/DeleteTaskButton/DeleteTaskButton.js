import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

import Modal from "../Modal/Modal.js";
import DeleteTaskContent from "../DeleteTaskContent/DeleteTaskContent.js";

const DeleteTaskButton = ({ title, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <button
        className="TaskCard__button-trash icon-button"
        onClick={() => {
          setShowDeleteModal(true);
        }}
      >
        <BsTrash className="TaskCard__icon" />
      </button>

      {showDeleteModal && (
        <Modal width="45rem">
          <DeleteTaskContent
            title={title}
            id={id}
            onCloseClick={setShowDeleteModal}
          />
        </Modal>
      )}
    </>
  );
};

export default DeleteTaskButton;
