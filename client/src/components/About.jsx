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
          <Card variant="outlined" sx={{ mb: 4, flex: "1" }}>
            <CardMedia
              component="img"
              src="assets/headshot.webp"
              alt="Andy Choo"
            />
          </Card>

          <Stack
            direction="column"
            sx={{ justifyContent: "space-evenly", flex: "1", m: "10%" }}
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
              I'm Andy, a full-stack web developer, committed to pursuing
              constant growth and refinement of my skills. I am at my strongest
              in any department where I may express technical skill, with my
              creativity. In my free time I love creating digital paintings,
              playing guitar, golf, pickleball, and resistance training in the
              gym.
            </Typography>
          </Stack>
        </Container>

        {/* <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={3}
          justifyContent="center"
        >
          <Button variant="contained" href="#Projects" size="large">
            Projects
          </Button>
          <Button variant="outlined" href="#Contact" size="large">
            Contact
          </Button>
        </Stack> */}
      </Box>
    </ThemeProvider>
  );
}
