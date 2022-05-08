import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";

import { TextInput, TextArea, SelectBox } from "./inputComponents.js";
import taskValidation from "./validation.js";
import { AiOutlineClose } from "react-icons/ai";

import "./TaskForm.scss";

const TaskForm = ({ role, showModal, initialValues, sendData }) => {
  const dispatch = useDispatch();

  const projects = useSelector((state) => {
    return state.projects;
  });

  //return the first one that is truthy. By default taskCreationErrorsBackend is null(falsy)
  const errorsBackend = useSelector((state) => {
    return state.taskCreationErrorsBackend || {};
  });

  const [clickedCreate, setClickedCreate] = useState(false);

  useEffect(() => {
    if (clickedCreate) {
      //if no backend errors, we're good, so lets close modal. This will unmount my modal, so I dont need to set clickedCreate to false,because when it mounts, it will use initial state again.
      if (!Object.keys(errorsBackend).length) {
        showModal(false);
        //otherwise, if there is error, we need to set clickedCreate to false, so when we click createTask again and no backend errors, the modal will close
      } else {
        setClickedCreate(false);
      }
    }
  }, [clickedCreate]);

  return (
    <div className="TaskForm">
      <Formik
        initialValues={initialValues}
        validationSchema={taskValidation}
        onSubmit={async (values) => {
          await sendData(values);
          setClickedCreate(true);
        }}
      >
        <Form>
          <div className="TaskForm__heading">
            {role === "create" ? <h2>Create Task</h2> : <h2>Edit Task</h2>}
            <button
              type="button"
              className="icon-button"
              onClick={() => {
                showModal(false);
              }}
            >
              <AiOutlineClose className="TaskForm__icon icon" />
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
              <option value="low" className="TaskForm__select-value">
                Low
              </option>
              <option value="medium" className="TaskForm__select-value">
                Medium
              </option>
              <option value="high" className="TaskForm__select-value">
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
              <option value="project1" className="TaskForm__select-value">
                Project 1
              </option>
              <option value="project2" className="TaskForm__select-value">
                Project 2
              </option>
              <option value="project3" className="TaskForm__select-value">
                Project 3
              </option>
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
