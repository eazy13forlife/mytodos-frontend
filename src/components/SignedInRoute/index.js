import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SignedInRoute = ({ children, ...rest }) => {
  const userInfo = useSelector((state) => {
    return state.userInfo;
  });

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (userInfo) {
          return (
            <Redirect to={{ pathname: "/inbox", state: { from: location } }} />
          );
        }

        return children;
      }}
    />
  );
};

export default SignedInRoute;
