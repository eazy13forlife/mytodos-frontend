import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsPlusLg } from "react-icons/bs";

import Modal from "../Modal/Modal.js";
import TaskForm from "../TaskForm/TaskForm.js";
import { createTask } from "../../actions/";
import "./CreateTaskButton.scss";

const CreateTaskButton = () => {
  const dispatch = useDispatch();

  const [showCreateModal, setShowCreateModal] = useState(false);

  const onCreateTask = async (taskData) => {
    await dispatch(createTask(taskData));
  };

  return (
    <>
      <button
        className="Header__button"
        onClick={() => {
          setShowCreateModal(true);
        }}
      >
        <BsPlusLg className="Header__icon" />
      </button>

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
          />
        </Modal>
      )}
    </>
  );
};

export default CreateTaskButton;
