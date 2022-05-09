import React from "react";
import { useSelector } from "react-redux";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";
import "./index.scss";

const Upcoming = () => {
  const tasksUpcoming = useSelector((state) => {
    return state.tasksUpcoming;
  });

  return <GeneralLayout title="Upcoming" tasks={tasksUpcoming} />;
};

export default Upcoming;
