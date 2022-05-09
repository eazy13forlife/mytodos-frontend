import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasksToday } from "../../actions/";
import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import "./index.scss";

const Today = () => {
  const dispatch = useDispatch();

  const tasksToday = useSelector((state) => {
    return state.tasksToday;
  });

  useEffect(() => {
    dispatch(fetchTasksToday());
  }, []);

  return <GeneralLayout title="Today" tasks={tasksToday} />;
};

export default Today;
