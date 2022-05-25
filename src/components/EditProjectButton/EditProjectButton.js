import React from "react";

import withUpdateProjectModal from "../../HOC/withUpdateProjectModal.js";

const EditProjectButton = ({ onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      Edit Project
    </button>
  );
};

export default withUpdateProjectModal(EditProjectButton);
