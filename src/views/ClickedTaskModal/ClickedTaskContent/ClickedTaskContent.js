import React, { useRef } from "react";

import useCloseOffClick from "../../../hooks/useCloseOffClick.js";
import "./ClickedTaskContent.scss";
import renderPriorityValue from "../../../helperFunctions/renderPriorityValue.js";

const ClickedTaskContent = ({ data, close }) => {
  const clickedTaskContentRef = useRef();

  useCloseOffClick(clickedTaskContentRef, close);

  return (
    <div className="TaskContent" ref={clickedTaskContentRef}>
      <h2 className="TaskContent__title">{data.title}</h2>
      <p className="TaskContent__description">
        {data.description || "No description"}
      </p>
      <div className="TaskContent__secondary-info">
        <div className="TaskContent__meta-group flex">
          <div className="TaskContent__field">Priority:</div>
          <div className="TaskContent__content">
            {renderPriorityValue(data.priority) || "none"}
          </div>
        </div>
        <div className="TaskContent__meta-group flex">
          <div className="TaskContent__field">Due Date:</div>
          <div className="TaskContent__content">{data.dueDate || "none"}</div>
        </div>
        <div className="TaskContent__meta-group flex">
          <div className="TaskContent__field">Project:</div>
          <div className="TaskContent__content">{data.project || "none"}</div>
        </div>
      </div>
    </div>
  );
};

export default ClickedTaskContent;
