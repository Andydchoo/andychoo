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
} from "@mui/material";
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
    <>
      <AppBar className="navbar" position="fixed" elevation={5}>
        <Box className="navbar-inner">
          <Toolbar disableGutters>
            {/* Name text */}
            <Typography
              className="navbar-brand"
              variant="h4"
              noWrap
              component="a"
              href="/"
            >
              Andy Choo
            </Typography>

            {/* Nav buttons for med-larger screens */}
            <Box className="navbar-links">
              {pages.map((page) => (
                <Button className="navbar-link" key={page} href={"#" + page}>
                  {"//"}
                  {page}
                </Button>
              ))}
            </Box>

            {/* Social's icons */}
            <Box className="navbar-social-links">
              <Button
                className="navbar-icon-link"
                href="https://github.com/Andydchoo"
                target="_blank"
              >
                <GitHubIcon />
              </Button>
              <Button
                className="navbar-icon-link"
                href="https://www.linkedin.com/in/andychoo"
                target="_blank"
              >
                <LinkedInIcon />
              </Button>
            </Box>
            {/* Hamburger Menu */}
            <Box className="navbar-mobile-menu">
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                className="navbar-icon-link"
              >
                <MenuIcon className="navbar-menu-icon" />
              </IconButton>
              <Menu
                className="navbar-menu"
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
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleClose}>
                    <Button className="navbar-menu-link" href={"#" + page}>
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}
