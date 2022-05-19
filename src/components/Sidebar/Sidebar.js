import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import moment from "moment";

import SidebarItem from "../SidebarItem/SidebarItem.js";
import AddProjectButton from "../AddProjectButton/AddProjectButton.js";
import { BsMailbox, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineCalendar, AiTwotoneFolderOpen } from "react-icons/ai";
import { GrDocument } from "react-icons/gr";

import "./Sidebar.scss";

const getCount = createSelector(
  (state) => state.allTasks,
  (allTasks) => {
    let todayCount = 0;

    let upcomingCount = 0;

    const currentDate = moment().startOf("day").toISOString();

    const taskObjects = Object.values(allTasks.byId);

    taskObjects.forEach((task) => {
      if (task.dueDate && task.dueDate === currentDate) {
        todayCount += 1;
      } else if (task.dueDate && task.dueDate > currentDate) {
        upcomingCount += 1;
      }
    });

    return { todayCount, upcomingCount };
  }
);

const getAllProjects = createSelector(
  (state) => state.projects,

  (projects) => {
    const projectsArray = [];

    projects.allIds.forEach((id) => {
      projectsArray.push(projects.byId[id]);
    });

    return { projects, projectsArray };
  }
);

const Sidebar = () => {
  const inboxCount = useSelector((state) => {
    return state.allTasks.allIds.length;
  });

  const { todayCount, upcomingCount } = useSelector(getCount);

  const { projects, projectsArray } = useSelector(getAllProjects);

  const renderedProjects = projectsArray.map((project) => {
    const { title, tasks, _id: id } = projects.byId[project._id];
    const shortenedTitle =
      title.length > 20 ? `${title.substring(0, 19)}...` : title;

    return (
      <SidebarItem
        link={`/projects/:${id}`}
        itemName={shortenedTitle}
        count={tasks.length}
        key={project._id}
        icon={<GrDocument className="Sidebar__icon Sidebar__icon--document" />}
      />
    );
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

      <ul className="Sidebar__project-options">{renderedProjects}</ul>

      <AddProjectButton />
    </nav>
  );
};

export default Sidebar;
