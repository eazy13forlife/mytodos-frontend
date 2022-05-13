import React from "react";
import { useSelector } from "react-redux";

import SidebarItem from "../SidebarItem/SidebarItem.js";
import AddProjectButton from "../AddProjectButton/AddProjectButton.js";
import { BsMailbox, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineCalendar, AiTwotoneFolderOpen } from "react-icons/ai";

import "./Sidebar.scss";

const Sidebar = () => {
  const inboxCount = useSelector((state) => {
    return state.allTasks.length;
  });

  const todayCount = useSelector((state) => {
    return state.tasksToday.length;
  });

  const upcomingCount = useSelector((state) => {
    return state.tasksUpcoming.length;
  });

  return (
    <nav className="Sidebar">
      <ul className="Sidebar__main-options">
        <SidebarItem
          link="/inbox"
          itemName="inbox"
          count={inboxCount}
          icon={<BsMailbox className="Sidebar__icon Sidebar__icon--mailbox" />}
        />
        <SidebarItem
          link="/today"
          itemName="today"
          count={todayCount}
          icon={
            <AiOutlineCalendar className="Sidebar__icon Sidebar__icon--calendar" />
          }
        />
        <SidebarItem
          link="/upcoming"
          itemName="upcoming"
          count={upcomingCount}
          icon={
            <BsCalendar2Date className="Sidebar__icon Sidebar__icon--upcoming-calendar" />
          }
        />
      </ul>
      <h2 className="Sidebar__header Sidebar__header--projects">
        <AiTwotoneFolderOpen className="Sidebar__icon Sidebar__icon--folder" />
        Projects
      </h2>
      <AddProjectButton />
    </nav>
  );
};

export default Sidebar;
