import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history.js";

import LandingPage from "./views/LandingPage";
import Inbox from "./views/Inbox";
import Login from "./views/Entry/Login/";
import Project from "./views/Project";
import SignUp from "./views/Entry/SignUp";
import Today from "./views/Today";
import Upcoming from "./views/Upcoming";

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/inbox" exact>
        <Inbox />
      </Route>
      <Route path="/today" exact>
        <Today />
      </Route>
      <Route path="/upcoming" exact>
        <Upcoming />
      </Route>
      <Route path="/projects/:project-name" exact>
        <Project />
      </Route>
    </Router>
  );
};

export default App;
