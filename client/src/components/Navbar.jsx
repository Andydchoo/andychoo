import { React, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Menu,
  Button,
  MenuItem,
  Fade,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Navbar() {
  const [anchorEl, setanchorEl] = useState(null);

  const pages = ["About", "Skills", "Projects", "Contact"];

  const handleClose = () => {
    setanchorEl(null);
  };

  const handleClick = (e) => {
    setanchorEl(e.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={5}
        sx={{ backgroundColor: "background.variant" }}
      >
        <Box padding="0px 30px">
          <Toolbar disableGutters>
            {/* Hamburger Menu */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "flex", md: "none", lg: "none", xl: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="text.main"
              >
                <MenuIcon sx={{ color: "text.main" }} />
              </IconButton>
              <Menu
                id="menu-nav"
                anchorEl={anchorEl}
                elevation={5}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{
                  display: { xs: "block", md: "none", lg: "none", xl: "none" },
                  backgroundColor: "none",
                  "& .MuiPaper-root": {
                    backgroundColor: "rgb(18, 18, 18)",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleClose}>
                    <Button href={"#" + page} sx={{ color: "text.main" }}>
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Name text */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", sm: "none", med: "flex" },
                flex: 0.5,
                fontFamily: "Open sans",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "text.main",
                textDecoration: "none",
                justifyContent: { sm: "center", med: "center", lg: "start" },
              }}
            >
              Andy Choo
            </Typography>

            {/* Nav buttons for med-larger screens */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  href={"#" + page}
                  sx={{
                    margin: 2,
                    color: "text.main",
                    display: "flex",
                    fontFamily: "Open sans",
                    fontWeight: "600",
                  }}
                >
                  {"//"}
                  {page}
                </Button>
              ))}
            </Box>

            {/* Social's icons */}
            <Box
              sx={{
                flex: 0.5,
                display: { xs: "flex", sm: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                href="https://github.com/Andydchoo"
                target="_blank"
                sx={{
                  color: "text.main",
                }}
              >
                <GitHubIcon />
              </Button>
              <Button
                href="https://www.linkedin.com/in/andychoo"
                target="_blank"
                sx={{
                  color: "text.main",
                }}
              >
                <LinkedInIcon />
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
}
