import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">{children}</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
