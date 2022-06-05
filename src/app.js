import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { fetchProjects, fetchTasks } from "./actions/";

const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => {
    return state.isLoggedIn;
  });

  useEffect(() => {
    const loadData = async () => {
      if (isLoggedIn) {
        //we get all projects firsts and then tasks, so tasks can live in the projects
        await dispatch(fetchProjects());
        await dispatch(fetchTasks());
      }
    };

    loadData();
  }, [isLoggedIn]);

  return (
    <Router history={history}>
      <SignedInRoute path="/" exact>
        <LandingPage />
      </SignedInRoute>
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
      <PrivateRoute path="/projects/:projectId" exact>
        <Project />
      </PrivateRoute>
    </Router>
  );
};
/*
<Route
        path="/projects/:projectId"
        render={(props) => <Project key={props.match.params.projectId} />}
      />
      */
export default App;
