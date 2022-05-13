import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsPencil } from "react-icons/bs";

import { editTask, removeTaskCreationError } from "../../actions";
import Modal from "../Modal/Modal.js";
import TaskForm from "../TaskForm/TaskForm.js";

const EditTaskButton = ({ initialValues, id }) => {
  const dispatch = useDispatch();

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const onUpdateTask = async (taskData) => {
    dispatch(editTask(id, taskData));
  };

  const onEditTaskClose = () => {
    dispatch(removeTaskCreationError());
    setShowEditTaskModal(false);
  };

  return (
    <>
      <button
        className="TaskCard__button-pencil icon-button"
        onClick={() => {
          setShowEditTaskModal(true);
        }}
      >
        <BsPencil className="TaskCard__icon" />
      </button>

      {showEditTaskModal && (
        <Modal width="70rem">
          <TaskForm
            role="edit"
            initialValues={initialValues}
            sendData={onUpdateTask}
            showModal={setShowEditTaskModal}
            onCloseClick={onEditTaskClose}
          />
        </Modal>
      )}
    </>
  );
};

export default EditTaskButton;
