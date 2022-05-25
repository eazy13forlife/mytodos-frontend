import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import EllipsesButton from "../EllipsesButton/EllipsesButton.js";
import ProjectUpdateOptions from "../ProjectUpdateOptions/ProjectUpdateOptions.js";

import "./SidebarItem.scss";

const SidebarItem = ({ link, icon, itemName, count, type, id }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);

  return (
    <li
      className="Sidebar__item"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        //if projectOptions is showing, don't run any code. leave it
        if (!showProjectOptions) {
          setIsHovering(false);
        }
      }}
    >
      <div className="Sidebar__item-content">
        <Link to={link} className="Sidebar__link">
          {icon}

          <span className="Sidebar__name">{itemName}</span>
        </Link>
        {isHovering && type === "project" ? (
          <>
            <EllipsesButton
              onClick={(e) => {
                e.preventDefault();
                setShowProjectOptions(!showProjectOptions);
              }}
            />

            {showProjectOptions && (
              <ProjectUpdateOptions
                itemName={itemName}
                id={id}
                close={() => {
                  setShowProjectOptions(false);
                  setIsHovering(false);
                }}
              />
            )}
          </>
        ) : (
          <span className="Sidebar__count">{count}</span>
        )}
      </div>
    </li>
  );
};

export default SidebarItem;
