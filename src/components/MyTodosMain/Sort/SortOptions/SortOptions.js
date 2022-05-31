import React, { useRef } from "react";

import useCloseComponentOffClick from "../../../../hooks/useCloseOffClick.js";
import RenderedOptions from "./RenderedOptions.js";

import "./RenderedOptions.js";

const SortOptions = ({ options, onOptionClick, closeComponent }) => {
  const sortOptionsRef = useRef();

  useCloseComponentOffClick(sortOptionsRef, closeComponent);

  return (
    <div className="SortOptions" ref={sortOptionsRef}>
      <RenderedOptions
        options={options}
        onOptionClick={onOptionClick}
        closeOptions={closeComponent}
      />
    </div>
  );
};

export default SortOptions;
