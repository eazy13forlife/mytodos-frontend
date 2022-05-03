import { editTask, deleteTask } from "./index.js";
import { getMyProfile } from "./user.js";
import { removeRecentlyCompleted } from "./recentlyCompleted.js";

const onTaskCompletion = () => {
  return async (dispatch, getState) => {
    const recentlyCompleted = getState().recentlyCompleted;
    await dispatch(editTask(recentlyCompleted, { completed: true }));
    await dispatch(deleteTask(recentlyCompleted));
    await dispatch(getMyProfile());
    await dispatch(removeRecentlyCompleted());
  };
};

export { onTaskCompletion };
