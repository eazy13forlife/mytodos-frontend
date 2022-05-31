import React from "react";
import { getDisplayName } from "../optionsData.js";
import "./SortOptions.scss";

const RenderedOptions = ({ options, onOptionClick, closeOptions }) => {
  const renderedOptions = options.map((option, index) => {
    return (
      <div
        className="SortOptions__option"
        key={index}
        onClick={(e) => {
          onOptionClick(option);
          closeOptions();
          e.stopPropagation();
        }}
      >
        <p className="SortOptions__option-title">{getDisplayName(option)}</p>
      </div>
    );
  });

  return renderedOptions;
};

export default RenderedOptions;
