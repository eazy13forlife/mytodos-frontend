import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
  const userInfo = useSelector((state) => {
    return state.userInfo;
  });

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo) {
          return React.cloneElement(children, {
            key: props.match.params.projectId,
          });
        }

        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
