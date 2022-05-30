import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

import SortOptions from "../SortOptions/SortOptions";
import "./SortGroup.scss";

const SortGroup = ({ sortTitle, options, onOptionClick, displayValue }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className="SortGroup"
      onClick={() => {
        setShowOptions(true);
      }}
    >
      <p>{sortTitle}</p>

      <div className="SortGroup__value-group">
        <p className="SortGroup__value">{displayValue}</p>
        <AiOutlineDown className="SortGroup__icon SortGroup__down-arrow-icon" />
      </div>

      {showOptions && (
        <SortOptions
          options={options}
          onOptionClick={onOptionClick}
          closeComponent={() => {
            setShowOptions(false);
          }}
        />
      )}
    </div>
  );
};

export default SortGroup;
