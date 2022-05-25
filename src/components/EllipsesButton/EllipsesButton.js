import React from "react";

import "./EllipsesButton.scss";

const EllipsesButton = ({ onClick }) => {
  return (
    <button className="EllipsesButton" onClick={onClick}>
      <span className="EllipsesButton__circle"></span>
      <span className="EllipsesButton__circle"></span>
      <span className="EllipsesButton__circle"></span>
    </button>
  );
};

export default EllipsesButton;
