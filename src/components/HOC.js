import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "./Modal/Modal.js";
import TaskForm from "./TaskForm/TaskForm.js";
import { createTask, removeTaskCreationError } from "../actions";

export default function (WrappedComponent) {
  return function withCreateTaskModal(props) {
    const dispatch = useDispatch();

    const [showCreateModal, setShowCreateModal] = useState(false);

    const onCreateTask = async (taskData) => {
      await dispatch(createTask(taskData));
    };

    const onCloseCreateTask = () => {
      dispatch(removeTaskCreationError());
      setShowCreateModal(false);
    };

    return (
      <>
        <WrappedComponent onClick={setShowCreateModal} {...props} />

        {showCreateModal && (
          <Modal width="70rem">
            <TaskForm
              role="create"
              showModal={setShowCreateModal}
              initialValues={{
                title: "",
                description: "",
                priority: "",
                project: "",
                dueDate: "",
                completed: false,
              }}
              sendData={onCreateTask}
              onCloseClick={onCloseCreateTask}
            />
          </Modal>
        )}
      </>
    );
  };
}
