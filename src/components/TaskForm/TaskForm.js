import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";

import { TextInput, TextArea, SelectBox } from "./inputComponents.js";
import taskValidation from "./validation.js";
import { AiOutlineClose } from "react-icons/ai";

import "./TaskForm.scss";

const TaskForm = ({ role }) => {
  const projects = useSelector((state) => {
    return state.projects;
  });

  return (
    <div className="TaskForm">
      <Formik
        initialValues={{
          title: "",
          description: "",
          priority: "",
          project: "",
          dueDate: "",
          completed: false,
        }}
        validationSchema={taskValidation}
        onSubmit={(values) => {
          console.log("hey");
        }}
      >
        <Form>
          <div className="TaskForm__heading">
            {role === "create" ? <h2>Create Task</h2> : <h2>Edit Task</h2>}
            <button type="button" className="TaskForm__close-button">
              <AiOutlineClose className="TaskForm__icon" />
            </button>
          </div>

          <div className="TaskForm__content">
            <TextInput type="text" name="title" label="title" id="title" />

            <SelectBox name="priority" label="priority" id="priority">
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

            <SelectBox name="project" label="project" id="project">
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
            />

            <TextArea
              name="description"
              placeholder="Enter Description..."
              label="description"
              id="description"
            />
          </div>

          <div className="align-right">
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
