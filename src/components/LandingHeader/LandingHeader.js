import React from "react";
import { Link } from "react-router-dom";

import "./LandingHeader.scss";

const LandingHeader = () => {
  return (
    <header className="LandingHeader">
      <div className="LandingHeader__container container">
        <span className="logo">myTodos</span>
        <nav className="LandingHeader__nav">
          <ul className="LandingHeader__nav-list">
            <li className="LandingHeader__nav-item">
              <Link to="/login" className="LandingHeader__nav-link">
                Log in
              </Link>
            </li>
            <li className="LandingHeader__nav-item">
              <Link to="/login" className="LandingHeader__nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
