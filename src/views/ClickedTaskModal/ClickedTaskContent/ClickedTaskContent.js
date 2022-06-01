import React, { useRef } from "react";

import useCloseOffClick from "../../../hooks/useCloseOffClick.js";
import "./ClickedTaskContent.scss";

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
          <div className="TaskContent__content">{data.priority || "none"}</div>
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

/*
  <div className="TaskContent">
      <div className="TaskContent__group">
        <div className="TaskContent__field">Title:</div>
        <div className="TaskContent__content">
          Tfamily Felidae and is often referred to as the domestic cat to
          distinguish it from the wild members of the family.[4] A cat can
          either be a house cat, a farm cat or a feral cat; the latter ranges
          freely and avoids human contact.[5] Domestic cats are valued by humans
          for companionship and their ability to kill rodents. About 60 cat
          breeds are recognized by various cat registries.[6]
        </div>
      </div>
      <div className="TaskContent__group">
        <div className="TaskContent__field">Description:</div>
        <div className="TaskContent__content">
          family Felidae and is often referred to as the domestic cat to
          distinguish it from the wild members of the family.[4] A cat can
          either be a house cat, a farm cat or a feral cat; the latter ranges
          freely and avoids human contact.[5] Domestic cats are valued by humans
          for companionship and their ability to kill rodents. About 60 cat
          breeds are recognized by various cat registries.[6]
        </div>
      </div>
      <div className="TaskContent__group">
        <div className="TaskContent__field">Priority:</div>
        <div className="TaskContent__content">None</div>
      </div>
      <div className="TaskContent__group">
        <div className="TaskContent__field">Due Date:</div>
        <div className="TaskContent__content">None</div>
      </div>
    </div>
    */
