import React from "react";
import { Redirect, Route } from "react-router-dom";

type PublicRouteProps = {
  isAuthenticated: boolean;
  component: React.FC;
  path: string;
};

export const PublicRoute: React.FC<PublicRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...others
}) => {
  return (
    <Route
      {...others}
      component={(props: any) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};
