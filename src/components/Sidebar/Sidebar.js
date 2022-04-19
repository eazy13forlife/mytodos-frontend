import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "../SidebarItem/SidebarItem.js";
import { BsMailbox, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="Sidebar">
      <ul className="Sidebar__main-options">
        <SidebarItem
          link="/inbox"
          itemName="inbox"
          count={50}
          icon={<BsMailbox className="Sidebar__icon Sidebar__icon--mailbox" />}
        />
        <SidebarItem
          link="/today"
          itemName="today"
          count={100}
          icon={
            <AiOutlineCalendar className="Sidebar__icon Sidebar__icon--calendar" />
          }
        />
        <SidebarItem
          link="/upcoming"
          itemName="upcoming"
          count={150}
          icon={
            <BsCalendar2Date className="Sidebar__icon Sidebar__icon--upcoming-calendar" />
          }
        />
      </ul>
      <h2 className="Sidebar__header Sidebar__header--projects">
        <AiTwotoneFolderOpen className="Sidebar__icon Sidebar__icon--folder" />
        Projects
      </h2>
    </nav>
  );
};

export default Sidebar;
