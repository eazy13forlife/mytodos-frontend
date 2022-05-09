import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history.js";
import LandingHeader from "../../components/LandingHeader/LandingHeader.js";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="LandingPage full-wrap">
      <LandingHeader />
      <section className="LandingPage__main stretch-vertical">
        <div className="LandingPage__container container">
          <div className="LandingPage__content">
            <h1 className="LandingPage__header">
              Organize it all with myTodos
            </h1>
            <Link
              to="/signup"
              className="LandingPage__button primary-button primary-button--dark"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
