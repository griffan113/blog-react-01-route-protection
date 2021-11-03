import React, { useCallback } from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

import user from "../resources/user.json";

const AdminRoute = ({ component: Component, ...rest }) => {
  console.log(user.is_admin);
  const render = useCallback((routeProps) => {
    if (user.is_admin) {
      return <Component {...routeProps} user={user} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: routeProps.location },
          }}
        />
      );
    }
  }, []);

  return <ReactDOMRoute {...rest} render={render} />;
};

export default AdminRoute;
