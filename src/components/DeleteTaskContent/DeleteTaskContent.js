import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import ErrorBox from "../ErrorBox/ErrorBox.js";
import { deleteTask, removeDeleteTaskError } from "../../actions/";
import "./DeleteTaskContent.scss";

let timerId;

const DeleteTaskContent = ({ title, id, onCloseClick }) => {
  const dispatch = useDispatch();

  const onDeleteClick = async () => {
    const resp = await dispatch(deleteTask(id));

    //we want to remove deleteTaskError after 5000ms so error box won't show again.
    if (resp === "error") {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        dispatch(removeDeleteTaskError());
      }, 5000);

      //removes the modal only if error. If we remove when no error, the taskCard will be gone, but we will be trying to perform a state update on an unmounted component
      onCloseClick(false);
    }
  };

  return (
    <div className="DeleteTask">
      <div className="DeleteTask__header">
        <button
          type="button"
          className="icon-button"
          onClick={() => {
            onCloseClick(false);
          }}
        >
          <AiOutlineClose className="DeleteTask__icon icon" />
        </button>
      </div>

      <p>
        Are you sure you want to delete <b>{title}</b>?
      </p>

      <div className="DeleteTask__action-buttons">
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

export default DeleteTaskContent;
