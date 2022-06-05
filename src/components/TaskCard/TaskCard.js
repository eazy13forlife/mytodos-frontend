import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFlag, BsTrash } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import moment from "moment";

import DeleteTaskContent from "../DeleteItemContent/DeleteItemContent.js";
import EditTaskButton from "../EditTaskButton/EditTaskButton.js";
import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton.js";
import renderPriorityValue from "../../helperFunctions/renderPriorityValue.js";
import { addRecentlyCompleted, onTaskCompletion } from "../../actions/";
import "./TaskCard.scss";

const TaskCard = ({
  title,
  priority,
  description,
  project,
  dueDate,
  id,
  onClick,
}) => {
  const dispatch = useDispatch();

  const recentlyCompleted = useSelector((state) => {
    return state.recentlyCompleted;
  });

  const initialValues = {
    title: title,
    description: description,
    priority: priority,
    project: project,
    dueDate: dueDate ? moment(dueDate).format("MM/DD/YYYY") : "",
    completed: false,
  };

  const restrictedTitle =
    title.length > 300 ? `${title.substring(0, 299)}...` : title;

  const formattedDate = dueDate ? moment(dueDate).format("MMMM Do, YYYY") : "";

  const onCompletedCheck = async (e) => {
    if (e.target.checked) {
      //if something already in recently completed and we marked something else as completed mark the thing that was just recently completed as completed
      if (recentlyCompleted) {
        await dispatch(onTaskCompletion(recentlyCompleted));
      }

      dispatch(addRecentlyCompleted(id));
    }
  };

  return (
    <div className="TaskCard">
      <div className="TaskCard__content">
        <input
          className="TaskCard__radio"
          type="checkbox"
          name="completed"
          id={`completed-${id}`}
          onChange={onCompletedCheck}
        />
        <label className="TaskCard__custom-radio" htmlFor={`completed-${id}`}>
          <span className="TaskCard__radio-background">
            <GiCheckMark />
          </span>
        </label>

        <button
          className="TaskCard__background"
          onClick={() => {
            onClick({ title, description, priority, dueDate: formattedDate });
          }}
        ></button>

        <h2 className="TaskCard__title">{restrictedTitle}</h2>

        {renderPriorityValue(priority) ? (
          <BsFlag
            className={`TaskCard__icon TaskCard__icon-flag TaskCard__icon-flag--${renderPriorityValue(
              priority
            )}`}
          />
        ) : null}

        <span className="TaskCard__due-date">{formattedDate}</span>

        <EditTaskButton role="edit" initialValues={initialValues} id={id} />

        <DeleteTaskButton title={title} id={id} />
      </div>
    </div>
  );
};

export default TaskCard;
