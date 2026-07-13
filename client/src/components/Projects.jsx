import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

// Play gifs for projects to give quick preview of website

const projects = [
  {
    title: "SankyuStudio",
    description:
      "Full-stack ecommerce website built with Next.js, Vercel, Stripe, and Sanity.io",
    imageUrl: "assets/sankyu.webp",
    demoUrl: "https://sankyustudio.vercel.app/",
    sourceUrl: "https://github.com/Andydchoo/sankyu-next",
  },
  {
    title: "VodU",
    description:
      "Full-stack web app to upload, view, and comment on clips from video games. Built with React.js, Express.js, and MongoDB.",
    imageUrl: "assets/vodu.webp",
    demoUrl: "https://vod-u-front.onrender.com/",
    sourceUrl: "https://github.com/Copernichris/Vodu",
  },
  // {
  //   title: "The Daily Bounty(WIP)",
  //   description:
  //     "Web app for users to purchase leftover food for cheap. Built with React.js, and Express.js",
  //   imageUrl: "assets/tdb.webp",
  //   demoUrl: "https://thedailybounty.com",
  //   sourceUrl: "https://github.com/daily-bounty/daily-bounty",
  // },
  // {
  //   title: "Restaurant Order Management System",
  //   description:
  //     "Full-stack web app to create, manage, and track orders for a restaurant. Built with HTML, CSS, JavaScript, and SQL.",
  //   imageUrl: "assets/jellyfin.png",
  //   demoUrl: "",
  //   sourceUrl:
  //     "https://github.com/Andydchoo/Restaurant-Order-Management-System",
  // },
  {
    title: "Home Server",
    description:
      "Self-hosted linux server running Jellyfin, Pihole, and secured through a TailScale VPN.",
    imageUrl: "assets/jellyfin.png",
    demoUrl: "",
    sourceUrl: "",
  },
];

export default function Projects() {
  return (
    <>
      <a className="projects-anchor" id="Projects" href="/#">
        a
      </a>
      <Box className="projects">
        <Container>
          <Typography
            className="projects-title"
            component="h1"
            variant="h2"
            fontWeight="600"
            align="center"
            gutterBottom
          >
            Projects
          </Typography>
          <Grid className="projects-grid" container spacing={3} align="center">
            {projects.map((project, index) => (
              <Grid
                className="projects-grid-item"
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <Card className="projects-card">
                  {project.imageUrl ? (
                    <CardMedia
                      className="projects-card-media"
                      image={project.imageUrl}
                      title={project.title}
                    />
                  ) : (
                    <Box className="projects-card-media projects-card-placeholder" />
                  )}
                  <CardContent>
                    <Typography
                      className="projects-card-title"
                      gutterBottom
                      variant="h4"
                      fontWeight="600"
                      component="h2"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      className="projects-card-description"
                      variant="h6"
                      component="p"
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  {(project.demoUrl || project.sourceUrl) && (
                    <CardActions className="projects-card-actions">
                      {project.demoUrl && (
                        <Button
                          size="small"
                          color="primary"
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener"
                        >
                          Demo
                        </Button>
                      )}
                      {project.sourceUrl && (
                        <Button
                          size="small"
                          color="primary"
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener"
                        >
                          Source
                        </Button>
                      )}
                    </CardActions>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
