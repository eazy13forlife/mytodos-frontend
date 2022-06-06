import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { onTaskCompletion } from "../../actions";

const useRecentlyCompletedStatus = () => {
  const dispatch = useDispatch();

  const recentlyCompleted = useSelector((state) => {
    return state.recentlyCompleted;
  });

  useEffect(() => {
    //if recentlyCompleted is still true after 10 seconds of being set to completed then just mark it as completed for real.This will result in the taskCompletedbox not showing anymore
    const timerId = setTimeout(() => {
      if (recentlyCompleted) {
        dispatch(onTaskCompletion());
      }
    }, 10000);

    return () => {
      clearTimeout(timerId);
    };
  }, [recentlyCompleted]);

  return [recentlyCompleted];
};

export default useRecentlyCompletedStatus;
