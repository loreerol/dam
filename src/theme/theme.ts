import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h6: {
      fontSize: "1rem",
      marginBottom: 15,
      fontWeight: 600
    },
    body2: {
      lineHeight: 1,
      marginBottom: 10
    }
  },
});

export default theme;
