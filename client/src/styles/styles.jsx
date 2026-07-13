import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 570,
      md: 900,
      lg: 1024,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Alfacad", "Afacad", "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#121212",
      paper: "#292929",
      variant: "#292929",
      variant2: "#3b3b3b",
    },
    primary: {
      main: "#a088fd",
      variant: "#8a72e6",
    },
    secondary: {
      main: "#03dac6",
      variant: "#018786",
    },
    error: {
      main: "#cf6679",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.6)",
      main: "rgba(255, 255, 255, 0.87)",
      sub: "rgba(255, 255, 255, 0.6)",
    },
  },
});
