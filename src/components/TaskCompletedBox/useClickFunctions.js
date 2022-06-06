import { useDispatch } from "react-redux";

import { removeRecentlyCompleted, onTaskCompletion } from "../../actions/";

const useClickFunctions = () => {
  const dispatch = useDispatch();

  const onUndoClick = () => {
    dispatch(removeRecentlyCompleted());
  };

  const onCloseClick = async () => {
    dispatch(onTaskCompletion());
  };

  return [onUndoClick, onCloseClick];
};

export default useClickFunctions;
