import React from "react";

import {
  renderBackgroundAnimation,
  renderSidebarAnimation,
} from "./helperFunctions.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

import "./SidebarPage.scss";

const SidebarPage = ({ mountIndicator }) => {
  return (
    <div className="SidebarPage">
      <div
        className="SidebarPage__background"
        style={renderBackgroundAnimation(mountIndicator)}
      ></div>
      <Sidebar style={renderSidebarAnimation(mountIndicator)} />
    </div>
  );
};

export default SidebarPage;
