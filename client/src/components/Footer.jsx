import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <>
      <AppBar className="footer" position="static">
        <Toolbar>
          <Typography className="footer-copyright" variant="body1">
            &copy; 2023 Andy Choo
          </Typography>
          {/* Social's icons */}
          <Box className="footer-socials">
            <Button
              className="footer-link"
              href="https://www.linkedin.com/in/andychoo"
              target="_blank"
            >
              <LinkedInIcon />
            </Button>
            <Button
              className="footer-link"
              href="https://github.com/Andydchoo"
              target="_blank"
            >
              <GitHubIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
