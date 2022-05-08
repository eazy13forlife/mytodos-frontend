import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFlag, BsTrash } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import moment from "moment";

import Modal from "../Modal/Modal.js";
import DeleteTaskContent from "../DeleteTaskContent/DeleteTaskContent.js";
import EditTaskButton from "../EditTaskButton/EditTaskButton.js";
import DeleteTaskButton from "../DeleteTaskButton/DeleteTaskButton.js";
import { addRecentlyCompleted, onTaskCompletion } from "../../actions/";
import "./TaskCard.scss";

const TaskCard = ({ title, priority, description, project, dueDate, id }) => {
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

        <h2 className="TaskCard__title">{title}</h2>

        {priority ? (
          <BsFlag
            className={`TaskCard__icon TaskCard__icon-flag TaskCard__icon-flag--${priority}`}
          />
        ) : null}

        <span className="TaskCard__due-date">{formattedDate}</span>

        <EditTaskButton initialValues={initialValues} id={id} />

        <DeleteTaskButton title={title} id={id} />
      </div>
    </div>
  );
};

export default TaskCard;
