import { createMuiTheme } from "@material-ui/core";

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#2148C0",
    },
    type: "dark",
  },
});

export { muiTheme };
