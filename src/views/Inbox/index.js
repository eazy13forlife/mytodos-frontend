import React from "react";
import { useSelector } from "react-redux";

import GeneralLayout from "../GeneralLayout/GeneralLayout.js";

import "./index.scss";
const Inbox = () => {
  const allTasks = useSelector((state) => {
    return state.allTasks;
  });

  return <GeneralLayout title="Inbox" tasks={allTasks} />;
};

export default Inbox;
