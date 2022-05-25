import React, { useState, useEffect } from "react";

import UpdateProjectModal from "../views/ModalViews/UpdateProjectModal.js";

export default function (WrappedComponent) {
  return function withUpdateProjectModal({ role, initialValues, ...props }) {
    const [showAddProjectModal, setShowAddProjectModal] = useState(false);

    const onCloseClick = () => {
      setShowAddProjectModal(false);
    };

    return (
      <>
        <WrappedComponent
          onClick={(e) => {
            setShowAddProjectModal(true);
          }}
          {...props}
        />

        {showAddProjectModal && (
          <UpdateProjectModal
            role={role}
            initialValues={initialValues}
            closeModal={onCloseClick}
          />
        )}
      </>
    );
  };
}
