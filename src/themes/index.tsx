import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#ffffff",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: "bold",
      },
      contained: {
        backgroundColor: "#ffffff",
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: "0px 1px 6px #00000029",
      },
    },
  },
  palette: {
    primary: {
      main: "#0096d6",
    },
    secondary: {
      main: "#f9b21d",
      contrastText: "#fff",
    },
  },
});
