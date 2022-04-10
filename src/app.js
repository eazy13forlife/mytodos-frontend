import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import Inbox from "./views/Inbox";
import Login from "./views/Login";
import Project from "./views/Project";
import SignUp from "./views/SignUp";
import Today from "./views/Today";
import Upcoming from "./views/Upcoming";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
