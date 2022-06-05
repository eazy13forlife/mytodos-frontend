import React from "react";
import { useSelector } from "react-redux";
import { GrDocument } from "react-icons/gr";

import { getAllProjects } from "../../memoizedSelectors/projectsState.js";
import SidebarItem from "../SidebarItem/SidebarItem.js";

const RenderedProjects = () => {
  const { projects, projectsArray } = useSelector(getAllProjects);

  const renderedProjects = projectsArray.map((project) => {
    const { title, tasks, _id: id } = projects.byId[project._id];

    return (
      <SidebarItem
        link={`/projects/:${id}`}
        itemName={title}
        count={tasks.length}
        key={project._id}
        type="project"
        id={id}
        icon={<GrDocument className="Sidebar__icon Sidebar__icon--document" />}
      />
    );
  });

  return renderedProjects;
};

export default RenderedProjects;
