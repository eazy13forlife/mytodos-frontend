import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

const Modal = ({ children, width }) => {
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container" style={{ width: width }}>
        {children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
