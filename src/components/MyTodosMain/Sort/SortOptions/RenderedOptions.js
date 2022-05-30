import React from "react";

import "./SortOptions.scss";

const RenderedOptions = ({ options, onOptionClick, closeOptions }) => {
  const renderedOptions = options.map((option, index) => {
    const { value, displayName } = option;

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
        <p className="SortOptions__option-title">{displayName}</p>
      </div>
    );
  });

  return renderedOptions;
};

export default RenderedOptions;
