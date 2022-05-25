import React, { useState, useEffect, useRef } from "react";

import UpdateProjectModal from "../../views/ModalViews/UpdateProjectModal.js";
import DeleteProjectModal from "../DeleteItemContent/DeleteProjectModal.js";
import "./ProjectUpdateOptions.scss";

const ProjectUpdateOptions = ({ itemName, close, id }) => {
  const projectUpdateOptionsRef = useRef();

  const [buttonClicked, setButtonClicked] = useState(null);

  useEffect(() => {
    const renderOptions = (e) => {
      if (
        projectUpdateOptionsRef.current &&
        !projectUpdateOptionsRef.current.contains(e.target)
      ) {
        close();
      }
    };

    window.addEventListener("click", renderOptions);

    return () => {
      window.removeEventListener("click", renderOptions);
    };
  }, []);

  const onButtonClick = (buttonName) => {
    setButtonClicked(buttonName);
  };

  const renderDisplay = () => {
    if (buttonClicked === "editProject") {
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
    }

    if (buttonClicked === "deleteProject") {
      return (
        <DeleteProjectModal
          title={itemName}
          id={id}
          closeModal={() => {
            close();
          }}
        />
      );
    } else {
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
