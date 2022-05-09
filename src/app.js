import React from "react";
import { useSelector } from "react-redux";
import { Router, Route } from "react-router-dom";
import history from "./history.js";

import PrivateRoute from "./components/PrivateRoute/";
import SignedInRoute from "./components/SignedInRoute";
import LandingPage from "./views/LandingPage";
import Inbox from "./views/Inbox";
import Login from "./views/Entry/Login/";
import Project from "./views/Project";
import SignUp from "./views/Entry/SignUp";
import Today from "./views/Today";
import Upcoming from "./views/Upcoming";

const App = () => {
  const userInfo = useSelector((state) => {
    return state.userInfo;
  });

  return (
    <Router history={history}>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <SignedInRoute path="/signup" exact>
        <SignUp />
      </SignedInRoute>
      <SignedInRoute path="/login" exact>
        <Login />
      </SignedInRoute>
      <PrivateRoute path="/inbox" exact>
        <Inbox />
      </PrivateRoute>
      <PrivateRoute path="/today" exact>
        <Today />
      </PrivateRoute>
      <PrivateRoute path="/upcoming" exact>
        <Upcoming />
      </PrivateRoute>
      <PrivateRoute path="/projects/:project-name" exact>
        <Project />
      </PrivateRoute>
    </Router>
  );
};

export default App;
