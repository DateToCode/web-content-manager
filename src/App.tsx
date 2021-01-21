import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import AppRouter from "./router/AppRouter";

//import Theme from "./theme/Theme";

function App() {
  return (
    <ThemeProvider
      theme={createMuiTheme({
        palette: {
          type: "dark",
        },
      })}
    >
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
