import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../components/Modal/Modal.js";
import TaskForm from "../components/TaskForm/TaskForm.js";
import UpdateTaskModal from "../views/ModalViews/UpdateTaskModal.js";
import { createTask, editTask, removeTaskCreationError } from "../actions";

export default function (WrappedComponent) {
  return function withUpdateTaskModal({ role, initialValues, ...props }) {
    const dispatch = useDispatch();

    const [showCreateModal, setShowCreateModal] = useState(false);

    const onCreateTask = async (taskData) => {
      await dispatch(createTask(taskData));
    };

    const onEditTask = async (taskData) => {
      await dispatch(editTask(props.id, taskData));
    };

    const onModalClose = () => {
      dispatch(removeTaskCreationError());
      setShowCreateModal(false);
    };

    return (
      <>
        <WrappedComponent
          onClick={() => {
            setShowCreateModal(!showCreateModal);
          }}
          {...props}
        />

        {showCreateModal && (
          <UpdateTaskModal
            role={role}
            initialValues={initialValues}
            closeModal={onModalClose}
            onUpdateTask={role === "create" ? onCreateTask : onEditTask}
          />
        )}
      </>
    );
  };
}
