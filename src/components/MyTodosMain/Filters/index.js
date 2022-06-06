import React, { useRef } from "react";
import { useRouteMatch } from "react-router-dom";

import useCloseComponentOffClick from "../../../hooks/useCloseOffClick.js";
import useFilterValues from "./useFilterValues.js";
import RadioGroup from "./RadioGroup/";
import useOnSubmit from "./useOnSubmit.js";
import "./index.scss";

const Filters = ({ closeComponent }) => {
  const filtersRef = useRef();

  const currentPath = useRouteMatch().path;

  useCloseComponentOffClick(filtersRef, closeComponent);

  const [filterValues, setFilterValues] = useFilterValues();

  const [onFormSubmit] = useOnSubmit(filterValues, closeComponent);

  return (
    <>
      <div className="Filters" ref={filtersRef}>
        <form
          className="Filters__form"
          action="#"
          method="post"
          onSubmit={onFormSubmit}
        >
          <h2 className="Filters__title">Select Filters</h2>
          {currentPath !== "/today" && currentPath !== "/upcoming" ? (
            <div
              className="Filters__filter"
              onInput={(e) => {
                setFilterValues(e);
              }}
            >
              <h3 className="Filters__filter-name">Due Date</h3>
              <RadioGroup
                name="dueDate"
                value=""
                label="none"
                id="priority-none"
              />
              <RadioGroup
                name="dueDate"
                value="today"
                label="today"
                id="today"
              />
              <RadioGroup
                name="dueDate"
                value="upcoming"
                label="upcoming"
                id="upcoming"
              />
            </div>
          ) : null}

          <div
            className="Filters__filter"
            onInput={(e) => {
              setFilterValues(e);
            }}
          >
            <h3 className="Filters__filter-name">Priority</h3>
            <RadioGroup name="priority" value="" label="none" id="none" />
            <RadioGroup name="priority" value="low" label="low" id="low" />
            <RadioGroup
              name="priority"
              value="medium"
              label="medium"
              id="medium"
            />
            <RadioGroup name="priority" value="high" label="high" id="high" />
          </div>

          <button
            type="submit"
            className="Filters__button primary-button primary-button--dark"
          >
            Done
          </button>
        </form>
      </div>
    </>
  );
};

export default Filters;
