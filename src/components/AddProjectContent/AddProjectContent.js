import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../EntryFormFields/Input/Input.js";
import "./AddProjectContent.scss";

const AddProjectContent = ({ showModal }) => {
  const dispatch = useDispatch();

  const [projectName, setProjectName] = useState("");

  const onFormSubmit = () => {
    dispatch();
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
        className="AddProjectContent__form"
        onSubmit={() => "hi"}
      >
        <Input
          type="text"
          name="name"
          id="name"
          value={projectName}
          errors={{}}
        />
      </form>

      <div className="AddProjectContent__button-wrapper align-right">
        <button type="submit" className="primary-button primary-button--dark">
          Add Project
        </button>
      </div>
    </div>
  );
};

export default AddProjectContent;
