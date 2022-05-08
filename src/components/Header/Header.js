import React from "react";
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton.js";
import LogoutButton from "../LogoutButton/LogoutButton.js";
import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <span className="color-light logo">myTodos</span>

      <nav className="Header__nav">
        <ul className="Header__nav-list">
          <li className="Header__item">
            <CreateTaskButton />
          </li>
          <li className="Header__item">
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
