import React from "react";

import Header from "../../components/Header/Header.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import MyTodosMain from "../../components/MyTodosMain/MyTodosMain.js";

import "./GeneralLayout.scss";
const GeneralLayout = ({ title, tasks, updatedValues }) => {
  return (
    <div className="GeneralLayout full-wrap">
      <Header />
      <div className="flex stretch-vertical">
        <Sidebar />
        <MyTodosMain
          title={title}
          tasks={tasks}
          updatedValues={updatedValues}
        />
      </div>
    </div>
  );
};

export default GeneralLayout;
