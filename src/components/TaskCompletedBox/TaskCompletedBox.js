import React from "react";

import useClickFunctions from "./useClickFunctions.js";
import { AiOutlineClose } from "react-icons/ai";
import "./TaskCompletedBox.scss";

const TaskCompletedBox = ({ mountIndicator }) => {
  const [onUndoClick, onCloseClick] = useClickFunctions();

  const unmountAnimation = () => {
    if (!mountIndicator) {
      return { opacity: 0, transition: "opacity 500ms ease-in" };
    }
  };

  return (
    <div className="TaskCompletedBox" style={unmountAnimation()}>
      <p>1 task completed</p>

      <div className="TaskCompletedBox__actions">
        <button
          className="TaskCompletedBox__button TaskCompletedBox__undo-button color-error"
          onClick={onUndoClick}
        >
          <span>Undo</span>
        </button>
        <button
          type="button"
          className="TaskCompletedBox__button TaskCompletedBox__close-button"
          onClick={onCloseClick}
        >
          <AiOutlineClose className="TaskCompletedBox__icon TaskCompletedBox__close-icon" />
        </button>
      </div>
    </div>
  );
};

export default TaskCompletedBox;
