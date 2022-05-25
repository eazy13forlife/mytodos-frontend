import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { createProject, editProject } from "../../actions";
import validateProjectData from "./validation.js";
import Input from "../EntryFormFields/Input/Input.js";
import "./UpdateProjectContent.scss";

let globalProjectErrors = {};

const UpdateProjectContent = ({ role, initialValues, id, closeModal }) => {
  const dispatch = useDispatch();

  const projectCreationErrorsBackend = useSelector((state) => {
    return state.projectCreationErrorsBackend;
  });

  const [projectData, setProjectData] = useState(initialValues);

  const [projectDataErrors, setProjectDataErrors] = useState({
    title: "",
  });

  const [clickSubmit, setClickSubmit] = useState(false);

  useEffect(() => {
    if (clickSubmit) {
      if (projectCreationErrorsBackend) {
        globalProjectErrors = projectCreationErrorsBackend;

        setProjectDataErrors({ ...globalProjectErrors });

        setClickSubmit(true);
      } else {
        closeModal();
      }
    }
  }, [clickSubmit]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    Object.keys(projectData).forEach((field) => {
      validateProjectData(projectData, field, globalProjectErrors);
    });

    setProjectDataErrors({ ...globalProjectErrors });

    if (!Object.keys(globalProjectErrors).length) {
      if (role === "create") {
        await dispatch(createProject(projectData));
      } else if (role === "edit") {
        await dispatch(editProject(id, projectData));
      }

      setClickSubmit(true);
    }
  };

  return (
    <div className="UpdateProjectContent">
      <div className="Modal__content-heading">
        <h2>{role === "create" ? `New Project` : `${initialValues.title}`}</h2>
        <button className="icon-button" onClick={closeModal}>
          <AiOutlineClose className="Modal__heading-icon" />
        </button>
      </div>

      <form
        action="urlofthepageontheserverthatthisformwillgoto"
        method="post"
        className="UpdateProjectContent__form"
        onSubmit={onFormSubmit}
      >
        <Input
          type="text"
          name="title"
          id="name"
          value={projectData.title}
          onChange={(e) => {
            setProjectData({ ...projectData, title: e.target.value });
          }}
          onBlur={(e) => {
            validateProjectData(
              projectData,
              e.target.name,
              globalProjectErrors
            );
            setProjectDataErrors({ ...globalProjectErrors });
          }}
          errors={projectDataErrors}
        />

        <div className="UpdateProjectContent__button-wrapper align-right">
          <button type="submit" className="primary-button primary-button--dark">
            {role === "create" ? `Add Project` : `Edit Project`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProjectContent;
