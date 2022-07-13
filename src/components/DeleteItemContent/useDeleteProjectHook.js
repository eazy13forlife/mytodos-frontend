import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { deleteProject, removeDeleteProjectError } from "../../actions";

let timerId;

const useDeleteProjectHook = (projectId, closeModal) => {
  const dispatch = useDispatch();

  const match = useRouteMatch();

  const onDeleteClick = async () => {
    let resp;

    //if we are on the same project page we are deleting, navigate to home directory afterwards
    if (
      match.params.projectId &&
      match.params.projectId.split(":")[1] === projectId
    ) {
      resp = await dispatch(deleteProject(projectId));
      history.push("/");
    } else {
      resp = await dispatch(deleteProject(projectId));
    }

    //we want to remove deleteTaskError after 5000ms so error box won't show again.
    if (resp === "error") {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        dispatch(removeDeleteProjectError());
      }, 5000);

      //removes the modal only if error. If we remove when no error because successfully deleted, the taskCard component will be gone, but we will be trying to perform a state update on an unmounted component
      closeModal();
    }
  };
  return [onDeleteClick];
};

export default useDeleteProjectHook;
