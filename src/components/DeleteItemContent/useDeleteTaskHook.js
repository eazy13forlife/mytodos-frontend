import React from "react";
import { useDispatch } from "react-redux";

import { deleteTask, removeDeleteTaskError } from "../../actions";

let timerId;

const useDeleteTaskHook = (taskId, closeModal) => {
  const dispatch = useDispatch();

  const onDeleteClick = async () => {
    const resp = await dispatch(deleteTask(taskId));

    //we want to remove deleteTaskError after 5000ms so error box won't show again.
    if (resp === "error") {
      console.log("now");
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        dispatch(removeDeleteTaskError());
      }, 5000);

      //removes the modal only if error. If we remove when no error because successfully deleted, the taskCard component will be gone, but we will be trying to perform a state update on an unmounted component
      closeModal();
    }
  };

  return [onDeleteClick];
};

export default useDeleteTaskHook;
