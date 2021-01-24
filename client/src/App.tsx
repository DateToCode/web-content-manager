import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import AppRouter from "./router/AppRouter";
import { muiTheme } from "./theme/theme";

//import Theme from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
