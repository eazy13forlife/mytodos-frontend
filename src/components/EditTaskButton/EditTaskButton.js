import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsPencil } from "react-icons/bs";

import { editTask } from "../../actions";
import Modal from "../Modal/Modal.js";
import TaskForm from "../TaskForm/TaskForm.js";

const EditTaskButton = ({ initialValues, id }) => {
  const dispatch = useDispatch();

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const onUpdateTask = async (taskData) => {
    dispatch(editTask(id, taskData));
  };

  return (
    <>
      <button
        className="TaskCard__button TaskCard__button-pencil"
        onClick={() => {
          setShowEditTaskModal(true);
        }}
      >
        <BsPencil className="TaskCard__icon TaskCard__icon-pencil" />
      </button>

      {showEditTaskModal && (
        <Modal width="70rem">
          <TaskForm
            role="edit"
            initialValues={initialValues}
            sendData={onUpdateTask}
            showModal={setShowEditTaskModal}
          />
        </Modal>
      )}
    </>
  );
};

export default EditTaskButton;
