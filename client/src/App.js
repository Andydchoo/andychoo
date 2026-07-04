import * as React from "react";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/styles";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar id="Navbar" />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
