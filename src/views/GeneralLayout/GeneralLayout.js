import React from "react";

import Header from "../../components/Header/Header.js";
import MyTodosMain from "../../components/MyTodosMain/MyTodosMain.js";
import useRenderSidebar from "./hooks/useRenderSidebar.js";
import "./GeneralLayout.scss";

const GeneralLayout = ({ title, tasks, updatedValues }) => {
  const { renderSidebar, setShowSidebarPage, showSidebarPage } =
    useRenderSidebar();

  return (
    <div className="GeneralLayout full-wrap">
      <Header
        onNavButtonClick={() => {
          setShowSidebarPage(!showSidebarPage);
        }}
      />

      <div className="GeneralLayout__main-content flex stretch-vertical">
        {renderSidebar()}

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
