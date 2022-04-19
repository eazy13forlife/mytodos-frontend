import React from "react";

import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar.js";
import { FaFilter } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import "./MyTodosMain.scss";

const MyTodosMain = ({ title, children }) => {
  return (
    <main className="Todos__content">
      <div className="Todos__heading">
        <h1>{title}</h1>
        <div className="Todos__filter-and-sort">
          <button className="Todos__action-button">
            <FaFilter className="Todos__action-icon" />
            <span className="Todos__action-button-text">Filter</span>
          </button>
          <button className="Todos__action-button">
            <BiSortAlt2 className="Todos__action-icon" />
            <span className="Todos__action-button-text">Sort</span>
          </button>
        </div>
      </div>
      {children}
    </main>
  );
};

export default MyTodosMain;
