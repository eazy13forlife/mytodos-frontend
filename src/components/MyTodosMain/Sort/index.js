import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineDown } from "react-icons/ai";

import useCloseComponentOffClick from "../../../hooks/useCloseOffClick.js";
import { sortByOptions, orderOptions, getDisplayName } from "./optionsData.js";
import useOnOptionClick from "./useOnOptionClick.js";

import {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
} from "../../../actions/";

import SortGroup from "./SortGroup.js/SortGroup.js";
import "./index.scss";
const Sort = ({ closeComponent }) => {
  const sortRef = useRef();

  useCloseComponentOffClick(sortRef, closeComponent);

  const { sortOrder, sortBy, setSortOrder, setSortBy } = useOnOptionClick();

  return (
    <div className="Sort" ref={sortRef}>
      <SortGroup
        sortTitle="Sort by"
        options={sortByOptions}
        displayValue={getDisplayName(sortBy)}
        onOptionClick={(value) => {
          setSortBy(value);
        }}
      />

      {sortBy ? (
        <SortGroup
          sortTitle="Order"
          options={orderOptions}
          displayValue={getDisplayName(sortOrder)}
          onOptionClick={(value) => {
            setSortOrder(value);
          }}
        />
      ) : null}
    </div>
  );
};

export default Sort;
