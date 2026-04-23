import * as React from "react";
import {
  Button,
  CssBaseline,
  Stack,
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/styles";

//  Todo
//    - Padding between photo and text on large view is nonexistent
//    - Change styling and description

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Anchor tag for About */}
      <a
        className="anchor"
        id="About"
        href="/#"
        style={{
          display: "block",
          position: "relative",
          top: "-68px",
          visibility: "hidden",
        }}
      >
        a
      </a>
      {/* Container for whole section */}
      <Box
        sx={{
          pt: 3,
          pb: 6,
          mt: "68.5px",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: {
              xs: "block",
              sm: "block",
              med: "block",
              lg: "flex",
              xl: "flex",
            },
            maxWidth: { xs: "sm", sm: "sm", med: "sm", lg: "xl" },
            alignItems: "center",
          }}
        >
          {/* Small display header */}
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.main"
            fontWeight="600"
            gutterBottom
            sx={{ display: { med: "block", lg: "none" } }}
          >
            About me
          </Typography>
          {/* Headshot card */}
          <Card variant="outlined" sx={{ mb: 4, display: "flex", flex: 1 }}>
            <CardMedia
              component="img"
              src="/assets/headshot.webp"
              alt="Andy Choo"
            />
          </Card>

          {/* Stack for description for about me */}
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flex: 1,
              m: "10%",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="text.main"
              fontWeight="600"
              gutterBottom
              sx={{
                display: { xs: "none", sm: "none", med: "none", lg: "block" },
              }}
            >
              Hello!
            </Typography>
            <Typography variant="h6" align="left" color="text.sub" paragraph>
              I'm Andy, a full-stack software engineer with professional
              experience in cybersecurity and web development. It's been my
              daily goal to improve every day and making the effort to endulge
              in my hobbies. I get happiness out of practicing digital art,
              collecting music, playing golf, and meeting new people with shared
              interests!
            </Typography>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
