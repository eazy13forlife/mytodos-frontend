import React from "react";

import "./FullPage.scss";

const FullPage = ({ children }) => {
  console.log(children);
  return (
    <div className="FullPage__outer-container">
      <div className="FullPage__child-container">{children}</div>
    </div>
  );
};

export default FullPage;
