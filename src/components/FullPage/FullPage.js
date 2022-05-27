import React from "react";

import "./FullPage.scss";

const FullPage = ({ children }) => {
  console.log(children);
  return (
    <div className="FullPage full-wrap">
      <div className="FullPage__child-container  vertical-stretch">
        {children}
      </div>
    </div>
  );
};

export default FullPage;
