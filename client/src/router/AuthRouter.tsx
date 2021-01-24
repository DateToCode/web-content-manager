import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ForgotPasswordPage from "../pages/Auth/ForgotPassword";
import LoginPage from "../pages/Auth/Login/Login";
import ResetPasswordPage from "../pages/Auth/ResetPassword";

type AuthRouterProps = {};

export const AuthRouter: React.FC<AuthRouterProps> = () => {
  return (
    <Switch>
      <Route path="/auth/login" exact component={LoginPage} />
      <Route
        path="/auth/forgot-password"
        exact
        component={ForgotPasswordPage}
      />
      <Route path="/auth/reset-password" exact component={ResetPasswordPage} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};
