import React from "react";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const userInfo = useSelector((state) => {
    return state.userInfo;
  });

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (userInfo) {
          return children;
        }

        return <Redirect to={{ pathname: "/", state: { from: location } }} />;
      }}
    />
  );
};

export default PrivateRoute;
