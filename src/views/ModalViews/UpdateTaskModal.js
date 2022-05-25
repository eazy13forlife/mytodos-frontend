import React from "react";

import Modal from "../../components/Modal/Modal.js";
import TaskForm from "../../components/TaskForm/TaskForm.js";

const UpdateTaskModal = ({ initialValues, role, onUpdateTask, closeModal }) => {
  return (
    <Modal width="70rem">
      <TaskForm
        role={role}
        initialValues={initialValues}
        sendData={onUpdateTask}
        closeModal={closeModal}
      />
    </Modal>
  );
};

export default UpdateTaskModal;
