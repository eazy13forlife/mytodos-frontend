import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { AiOutlineClose } from "react-icons/ai";

import { TextInput, TextArea, SelectBox } from "./inputComponents.js";
import taskValidation from "./validation.js";
import "./TaskForm.scss";
import useBackendResult from "./useBackendResult.js";
import ProjectSelectOptions from "./ProjectSelectOptions.js";

const TaskForm = ({ role, closeModal, initialValues, sendData }) => {
  const [errorsBackend, setClickedCreate] = useBackendResult(closeModal);

  return (
    <div className="TaskForm">
      <Formik
        initialValues={initialValues}
        validationSchema={taskValidation}
        onSubmit={async (values) => {
          setClickedCreate(true);
          await sendData(values);
        }}
      >
        <Form>
          <div className="Modal__content-heading">
            {role === "create" ? <h2>Create Task</h2> : <h2>Edit Task</h2>}
            <button type="button" className="icon-button" onClick={closeModal}>
              <AiOutlineClose className="Modal__heading-icon" />
            </button>
          </div>

          <div className="TaskForm__content">
            <TextInput
              type="text"
              name="title"
              label="title"
              id="title"
              backenderrors={errorsBackend}
            />

            <SelectBox
              name="priority"
              label="priority"
              id="priority"
              backenderrors={errorsBackend}
            >
              <option value="" className="TaskForm__select-value">
                None
              </option>
              <option value="1" className="TaskForm__select-value">
                Low
              </option>
              <option value="2" className="TaskForm__select-value">
                Medium
              </option>
              <option value="3" className="TaskForm__select-value">
                High
              </option>
            </SelectBox>

            <SelectBox
              name="project"
              label="project"
              id="project"
              backenderrors={errorsBackend}
            >
              <option value="" className="TaskForm__select-value">
                None
              </option>
              <ProjectSelectOptions />
            </SelectBox>

            <TextInput
              type="text"
              name="dueDate"
              label="Due Date"
              id="dueDate"
              placeholder="MM/DD/YYYY"
              backenderrors={errorsBackend}
            />

            <TextArea
              name="description"
              placeholder="Enter Description..."
              label="description"
              id="description"
              backenderrors={errorsBackend}
            />
          </div>

          <div className="TaskForm__button-wrapper align-right">
            <button
              type="submit"
              className="TaskForm__submit-button primary-button primary-button--dark"
            >
              {role === "create" ? "Create Task" : "Update Task"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
