import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import validateProjectData from "./validation.js";
import { createProject, editProject } from "../../actions";

let globalProjectErrors = {};

const useOnEventHandlers = (id, initialValues, role, closeModal) => {
  const dispatch = useDispatch();

  const [clickSubmit, setClickSubmit] = useState(false);

  const [projectData, setProjectData] = useState(initialValues);

  const projectCreationErrorsBackend = useSelector((state) => {
    return state.projectCreationErrorsBackend;
  });

  const [projectDataErrors, setProjectDataErrors] = useState({
    title: "",
  });

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

  const onBlur = (e) => {
    validateProjectData(projectData, e.target.name, globalProjectErrors);
    setProjectDataErrors({ ...globalProjectErrors });
  };

  const onChange = (e) => {
    setProjectData({ ...projectData, title: e.target.value });
  };

  return [projectData, onFormSubmit, onBlur, onChange, projectDataErrors];
};

export default useOnEventHandlers;
