import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  adjustAllTasks,
  adjustTasksToday,
  adjustTasksUpcoming,
  adjustTasksProject,
} from "../../actions";

//looks at our current path and returns the correct function needed to update that paths' specific adjustments
const useAdjustmentFunction = () => {
  const match = useRouteMatch();

  const currentPath = match.path;

  const dispatch = useDispatch();

  switch (currentPath) {
    case "/inbox": {
      return (adjustmentObject) => {
        dispatch(adjustAllTasks(adjustmentObject));
      };
    }
    case "/today":
      return (adjustmentObject) => {
        dispatch(adjustTasksToday(adjustmentObject));
      };
    case "/upcoming":
      return (adjustmentObject) => {
        dispatch(adjustTasksUpcoming(adjustmentObject));
      };
    case "/projects/:projectId": {
      const projectId = match.params.projectId.substring(1);
      return (adjustmentObject) => {
        dispatch(adjustTasksProject(projectId, adjustmentObject));
      };
    }
    default:
      break;
  }
};

export default useAdjustmentFunction;
