import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import ErrorBox from "../ErrorBox/ErrorBox.js";
import { deleteTask, removeDeleteTaskError } from "../../actions";
import useDeleteTaskHook from "./useDeleteTaskHook.js";
import "./DeleteItemContent.scss";

let timerId;

const DeleteItemContent = ({ title, id, closeModal }) => {
  const [onDeleteClick] = useDeleteTaskHook(id, closeModal);

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

const DeleteItemContent = ({ title, id, closeModal }) => {
  const dispatch = useDispatch();

  const onDeleteClick = async () => {
    const resp = await dispatch(deleteTask(id));

    //we want to remove deleteTaskError after 5000ms so error box won't show again.
    if (resp === "error") {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        dispatch(removeDeleteTaskError());
      }, 5000);

      //removes the modal only if error. If we remove when no error because successfully deleted, the taskCard component will be gone, but we will be trying to perform a state update on an unmounted component
      closeModal();
    }
  };

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
