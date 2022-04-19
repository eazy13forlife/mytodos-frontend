import React from "react";

import Header from "../../components/Header/Header.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import MyTodosMain from "../../components/MyTodosMain/MyTodosMain.js";

import "./index.scss";
const Inbox = () => {
  return (
    <div className="Inbox full-wrap">
      <Header />
      <div className="flex stretch-vertical">
        <Sidebar />
        <MyTodosMain title="Inbox">
          <p>this is where the rendered list will go</p>
        </MyTodosMain>
      </div>
    </div>
  );
};

export default Inbox;
