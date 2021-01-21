import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "../pages/Auth/Login/Login";

type AuthRouterProps = {};

export const AuthRouter: React.FC<AuthRouterProps> = () => {
  return (
    <Switch>
      <Route path="/auth/login" exact component={LoginPage} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};
