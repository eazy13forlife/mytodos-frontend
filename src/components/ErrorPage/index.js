import React from "react";

import "./index.scss";

const ErrorPage = ({ message }) => {
  return (
    <div className="ErrorPage full-wrap">
      <p className="ErrorPage__text color-error">{message}</p>
    </div>
  );
};

export default ErrorPage;
