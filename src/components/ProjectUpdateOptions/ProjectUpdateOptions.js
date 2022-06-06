import React, { useState, useRef } from "react";

import UpdateProjectModal from "../../views/ModalViews/UpdateProjectModal.js";
import DeleteProjectModal from "../DeleteItemContent/DeleteProjectModal.js";
import useCloseOptions from "./useCloseOptions.js";
import "./ProjectUpdateOptions.scss";

const ProjectUpdateOptions = ({ itemName, close, id }) => {
  const projectUpdateOptionsRef = useRef();

  const [buttonClicked, setButtonClicked] = useState(null);

  useCloseOptions(projectUpdateOptionsRef, close);

  const onButtonClick = (buttonName) => {
    setButtonClicked(buttonName);
  };

  const renderDisplay = () => {
    switch (buttonClicked) {
      case "editProject":
        return (
          <UpdateProjectModal
            role="edit"
            initialValues={{ title: itemName }}
            id={id}
            closeModal={() => {
              close();
            }}
          />
        );
      case "deleteProject":
        return (
          <DeleteProjectModal
            title={itemName}
            id={id}
            closeModal={() => {
              close();
            }}
          />
        );
      default:
        return (
          <div className="ProjectUpdateOptions" ref={projectUpdateOptionsRef}>
            <button
              className="ProjectUpdateOptions__button"
              onClick={() => {
                onButtonClick("editProject");
              }}
            >
              Edit Project
            </button>
            <button
              className="ProjectUpdateOptions__button"
              onClick={() => {
                onButtonClick("deleteProject");
              }}
            >
              Delete Project
            </button>
          </div>
        );
    }
  };

  return renderDisplay();
};

export default ProjectUpdateOptions;
