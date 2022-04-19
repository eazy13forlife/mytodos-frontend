import React from "react";
import { Link } from "react-router-dom";

import "./SidebarItem.scss";

const SidebarItem = ({ link, icon, itemName, count }) => {
  return (
    <li className="Sidebar__item">
      <Link to={link} className="Sidebar__link">
        {icon}
        <span className="capitalize">{itemName}</span>
        <span className="Sidebar__count">{count}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
