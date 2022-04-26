import React from "react";
import { useDispatch } from "react-redux";
import { BsFlag, BsPencil, BsTrash } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";

import { editTask, getMyProfile } from "../../actions/";
import "./TaskCard.scss";

const TaskCard = ({ title, priority, dueDate, id }) => {
  const dispatch = useDispatch();

  const onCompletedCheck = async (e) => {
    if (e.target.checked) {
      await dispatch(editTask(id, { completed: true }));
    } else {
      await dispatch(editTask(id, { completed: false }));
    }
    dispatch(getMyProfile()); //get profile in order to get latest tasksCompleted
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

        <span className="TaskCard__due-date">{dueDate}</span>

        <button className="TaskCard__button TaskCard__button-pencil">
          <BsPencil className="TaskCard__icon TaskCard__icon-pencil" />
        </button>

        <button className="TaskCard__button TaskCard__button-trash">
          <BsTrash className="TaskCard__icon TaskCard__icon-trash" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
