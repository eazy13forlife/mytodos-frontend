import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useBackendResult = (closeModal) => {
  //return the first one that is truthy. By default taskCreationErrorsBackend is null(falsy)
  const errorsBackend = useSelector((state) => {
    return state.taskCreationErrorsBackend || {};
  });

  const [clickedCreate, setClickedCreate] = useState(false);

  useEffect(() => {
    if (clickedCreate) {
      //if no backend errors, we're good, so lets close modal. This will unmount my modal, so I dont need to set clickedCreate to false,because when it mounts, it will use initial state again.
      if (!Object.keys(errorsBackend).length) {
        closeModal();
        //otherwise, if there is error, we need to set clickedCreate to false, so when we click createTask again and no backend errors, the modal will close
      } else {
        setClickedCreate(false);
      }
    }
  }, [clickedCreate]);

  return [errorsBackend, setClickedCreate];
};
export default useBackendResult;
