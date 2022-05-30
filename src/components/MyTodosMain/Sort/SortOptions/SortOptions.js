import React from "react";

import RenderedOptions from "./RenderedOptions.js";

import "./RenderedOptions.js";

const SortOptions = ({ options, onOptionClick, closeComponent }) => {
  return (
    <div className="SortOptions">
      <RenderedOptions
        options={options}
        onOptionClick={onOptionClick}
        closeOptions={closeComponent}
      />
    </div>
  );
};

export default SortOptions;
