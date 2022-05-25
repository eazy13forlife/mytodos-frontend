import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

import Modal from "../Modal/Modal.js";
import DeleteTaskContent from "../DeleteItemContent/DeleteItemContent.js";
import DeleteTaskModal from "../DeleteItemContent/DeleteTaskModal.js";

const DeleteTaskButton = ({ title, id }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const restrictedTitle =
    title.length > 40 ? `${title.substring(0, 39)}...` : title;

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
        <DeleteTaskModal
          title={restrictedTitle}
          id={id}
          closeModal={() => {
            setShowDeleteModal(false);
          }}
        />
      )}
    </>
  );
};

export default DeleteTaskButton;
