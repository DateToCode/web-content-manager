import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import LoginPage from "./pages/login";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
