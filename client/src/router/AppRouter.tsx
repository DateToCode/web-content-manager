import React, { useContext } from "react";
import { Redirect, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Home from "../pages/Home";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

type AppRouterProps = {};

const AppRouter: React.FC<AppRouterProps> = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Switch>
      <PublicRoute
        isAuthenticated={auth.authenticated}
        path="/auth"
        component={AuthRouter}
      />
      <PrivateRoute
        isAuthenticated={auth.authenticated}
        path="/"
        component={Home}
      />
      <Redirect to="/auth" />
    </Switch>
  );
};

export default AppRouter;
