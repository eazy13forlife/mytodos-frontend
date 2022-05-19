import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { createProject } from "../../actions/";
import validateProjectData from "./validation.js";
import Input from "../EntryFormFields/Input/Input.js";
import "./AddProjectContent.scss";

let globalProjectErrors = {};

const AddProjectContent = ({ showModal }) => {
  const dispatch = useDispatch();

  const projectCreationErrorsBackend = useSelector((state) => {
    return state.projectCreationErrorsBackend;
  });

  const [projectData, setProjectData] = useState({
    title: "",
  });

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
        showModal(false);
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
      await dispatch(createProject(projectData));
      setClickSubmit(true);
    }
  };

  return (
    <div className="AddProjectContent">
      <div className="Modal__content-heading">
        <h2>New Project</h2>
        <button
          className="icon-button"
          onClick={() => {
            showModal(false);
          }}
        >
          <AiOutlineClose className="Modal__heading-icon" />
        </button>
      </div>

      <form
        action="urlofthepageontheserverthatthisformwillgoto"
        method="post"
        className="AddProjectContent__form"
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

        <div className="AddProjectContent__button-wrapper align-right">
          <button type="submit" className="primary-button primary-button--dark">
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectContent;
