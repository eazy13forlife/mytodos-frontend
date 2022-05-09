import React from "react";
import { useSelector } from "react-redux";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import "./index.scss";

const Today = () => {
  const tasksToday = useSelector((state) => {
    return state.tasksToday;
  });

  return <GeneralLayout title="Today" tasks={tasksToday} />;
};

export default Today;
