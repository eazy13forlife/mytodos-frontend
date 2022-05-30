import React, { useState, useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";

import useCloseComponentOffClick from "../../../hooks/useCloseOffClick.js";
import { sortByOptions, orderOptions } from "./optionsArray.js";

import SortGroup from "./SortGroup.js/SortGroup.js";
import "./index.scss";
const Sort = ({ closeComponent }) => {
  const sortRef = useRef();

  useCloseComponentOffClick(sortRef, closeComponent);
  //initially, get the osrt Values. if it doesnt exist, (use use elector)
  const [sortBy, setSortBy] = useState({ value: "", displayName: "default" });

  const [sortOrder, setSortOrder] = useState({});
  //on on submit, if either sortBy or sortOrder doesn't exist, dispatch with an empty object/dont do anything. otherwise, dipsatch with the correct object of both sortBy and sortOrder values.
  return (
    <div className="Sort" ref={sortRef}>
      <SortGroup
        sortTitle="Sort by"
        options={sortByOptions}
        displayValue={sortBy.displayName}
        onOptionClick={(value) => {
          setSortBy(value);
        }}
      />

      {sortBy.value ? (
        <SortGroup
          sortTitle="Order"
          options={orderOptions}
          displayValue={sortOrder.sortDisplay}
          onOptionClick={(value) => {
            setSortOrder(value);
          }}
        />
      ) : null}
    </div>
  );
};

export default Sort;
