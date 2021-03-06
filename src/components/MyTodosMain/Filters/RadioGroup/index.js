import React from "react";

import { renderDefaultChecked } from "./helpers";
import useFilterValues from "../useFilterValues.js";
import "./index.scss";

const RadioGroup = ({ name, value, id, label }) => {
  const [filters] = useFilterValues();

  return (
    <div className="Filters__radio-group">
      <input
        type="radio"
        name={name}
        value={value}
        className="Filters___radio-button"
        defaultChecked={renderDefaultChecked(name, value, filters)}
        id={id}
      />
      <label htmlFor={id} className="Filters__radio-label">
        {label}
      </label>
    </div>
  );
};

export default RadioGroup;
