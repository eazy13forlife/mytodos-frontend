import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasksUpcoming } from "../../actions/";
import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import "./index.scss";

const Upcoming = () => {
  const dispatch = useDispatch();

  const tasksUpcoming = useSelector((state) => {
    return state.tasksUpcoming;
  });

  useEffect(() => {
    dispatch(fetchTasksUpcoming());
  }, []);

  return <GeneralLayout title="Upcoming" tasks={tasksUpcoming} />;
};

export default Upcoming;
