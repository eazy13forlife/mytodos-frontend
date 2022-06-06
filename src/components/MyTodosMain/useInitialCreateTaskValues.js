import moment from "moment";
import { useRouteMatch } from "react-router-dom";
import { initialValues } from "../TaskForm/initialValues.js";

const useInitialCreateTaskValues = () => {
  const match = useRouteMatch();

  switch (match.path) {
    case "/today":
      return {
        ...initialValues,
        dueDate: moment().startOf("day").format("MM/DD/YYYY"),
      };
    case "/projects/:projectId": {
      const projectId = match.params.projectId.substring(1);
      return { ...initialValues, project: projectId };
    }
    default:
      return initialValues;
  }
};

export default useInitialCreateTaskValues;
