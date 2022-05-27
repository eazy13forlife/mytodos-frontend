import React from "react";
import { useSelector } from "react-redux";

import SidebarItem from "../SidebarItem/SidebarItem.js";
import AddProjectButton from "../AddProjectButton/AddProjectButton.js";
import { BsMailbox, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineCalendar, AiTwotoneFolderOpen } from "react-icons/ai";

import { getCount } from "./selectors.js";
import RenderedProjects from "./RenderedProjects.js";
import "./Sidebar.scss";

const Sidebar = () => {
  const inboxCount = useSelector((state) => {
    return state.allTasks.allIds.length;
  });

  const { todayCount, upcomingCount } = useSelector(getCount);

  return (
    <nav className="Sidebar">
      <ul className="Sidebar__main-options">
        <SidebarItem
          link="/inbox"
          itemName="Inbox"
          count={inboxCount}
          icon={<BsMailbox className="Sidebar__icon Sidebar__icon--mailbox" />}
        />

        <SidebarItem
          link="/today"
          itemName="Today"
          count={todayCount}
          icon={
            <AiOutlineCalendar className="Sidebar__icon Sidebar__icon--calendar" />
          }
        />

        <SidebarItem
          link="/upcoming"
          itemName="Upcoming"
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

      <ul className="Sidebar__project-options">
        <RenderedProjects />
      </ul>

      <AddProjectButton role="create" initialValues={{ title: "" }} />
    </nav>
  );
};

export default Sidebar;
