import React from "react";

import "./ErrorBox.scss";

const ErrorBox = ({ message }) => {
  return (
    <div className="ErrorBox">
      <p>{message}</p>
    </div>
  );
};

export default ErrorBox;
