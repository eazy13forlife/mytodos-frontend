import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../../actions/";
import GeneralLayout from "../GeneralLayout/GeneralLayout.js";

import "./index.scss";
const Inbox = () => {
  const dispatch = useDispatch();

  const allTasks = useSelector((state) => {
    return state.allTasks;
  });

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return <GeneralLayout title="Inbox" tasks={allTasks} />;
};

export default Inbox;
