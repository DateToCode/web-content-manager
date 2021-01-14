import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginPage from "../pages/login";

type AppRouterProps = {};

const AppRouter: React.FC<AppRouterProps> = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  );
};

export default AppRouter;
