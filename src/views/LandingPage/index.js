import React from "react";

import FullPage from "../../components/FullPage/FullPage.js";
import LandingHeader from "../../components/LandingHeader/LandingHeader.js";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="LandingPage full-wrap">
      <LandingHeader />
      <section className="LandingPage__main">
        <div className="LandingPage__container container">
          <div className="LandingPage__content">
            <h1 className="LandingPage__header">
              Organize it all with myTodos
            </h1>
            <button className="primary-button primary-button--dark">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
