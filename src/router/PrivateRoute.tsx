import React from "react";
import { Redirect, Route } from "react-router-dom";

type PrivateRouteProps = {
  isAuthenticated: boolean;
  component: React.FC;
  path: string;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...others
}) => {
  return (
    <Route
      {...others}
      component={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    ></Route>
  );
};
