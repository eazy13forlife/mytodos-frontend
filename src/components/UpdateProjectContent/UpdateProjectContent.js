import React from "react";

import { AiOutlineClose } from "react-icons/ai";

import Input from "../EntryFormFields/Input/Input.js";
import useOnEventHandlers from "./useOnEventHandlers.js";
import "./UpdateProjectContent.scss";

const UpdateProjectContent = ({ role, initialValues, id, closeModal }) => {
  const [projectData, onFormSubmit, onBlur, onChange, projectDataErrors] =
    useOnEventHandlers(id, initialValues, role, closeModal);

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
          onChange={onChange}
          onBlur={onBlur}
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
