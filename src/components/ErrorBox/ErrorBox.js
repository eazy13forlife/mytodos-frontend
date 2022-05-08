import React from "react";
import ReactDOM from "react-dom";
import "./ErrorBox.scss";

/*
const ErrorBox = ({ message }) => {
  return (
    <div className="ErrorBox">
      <p>{message}</p>
    </div>
  );
};
*/

const ErrorBox = ({ message }) => {
  return ReactDOM.createPortal(
    <div className="ErrorBox">
      <p>{message}</p>
    </div>,
    document.querySelector("#error-box")
  );
};
export default ErrorBox;
