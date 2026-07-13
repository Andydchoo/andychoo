import * as React from "react";
import {
  Stack,
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  Button,
} from "@mui/material";

export default function About() {
  return (
    <>
      {/* Anchor tag for About */}
      <a className="about-anchor" id="About" href="/#">
        a
      </a>
      {/* Container for whole section */}
      <Box className="about">
        <Container className="about-layout">
          {/* Headshot card */}
          <Card className="about-photo" variant="outlined">
            <CardMedia
              component="img"
              src="/assets/headshot.webp"
              alt="Andy Choo"
            />
          </Card>

          {/* Stack for description for about me */}
          <Stack className="about-copy" direction="column">
            <Typography
              className="about-title"
              component="h1"
              variant="h1"
              align="left"
              gutterBottom
            >
              Hi, I'm Andy Choo
            </Typography>
            <Typography
              className="about-heading"
              variant="h3"
              align="left"
              paragraph
              gutterBottom
            >
              A{" "}
              <span className="about-heading-accent">
                full-stack software engineer
              </span>{" "}
              with experience in cybersecurity.
            </Typography>
            <Typography
              className="about-description"
              variant="body1"
              align="left"
              paragraph
            >
              Outside of client work, I'm usually adding to my homelab server,
              collecting music, practicing guitar, playing golf, or pickleball.
            </Typography>
            <Button
              className="about-projects-button"
              href="#Projects"
              variant="text"
            >
              View my work →
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
