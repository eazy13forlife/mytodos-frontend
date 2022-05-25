import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import "./DeleteItemContent.scss";

const DeleteItemContent = ({ title, onDeleteClick, closeModal }) => {
  return (
    <div className="DeleteItem">
      <div className="DeleteItem__header">
        <button type="button" className="icon-button" onClick={closeModal}>
          <AiOutlineClose className="DeleteItem__icon icon" />
        </button>
      </div>

      <p>
        Are you sure you want to delete <b>{title}</b>?
      </p>

      <div className="DeleteItem__action-buttons">
        <button
          className="primary-button primary-button--dark"
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteItemContent;
