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
    description: "A full-stack ecommerce website built with Next.js",
    imageUrl: "assets/sankyu.webp",
    demoUrl: "https://sankyustudio.vercel.app/",
    sourceUrl: "https://github.com/Andydchoo/sankyu-next",
  },
  {
    title: "The Daily Bounty(WIP)",
    description: "Service for users to purchase food waste for cheap.",
    imageUrl: "assets/tdb.webp",
    demoUrl: "https://thedailybounty.com",
    sourceUrl: "",
  },
  {
    title: "VodU",
    description: "Upload, view, and comment on clips from video games.",
    imageUrl: "assets/vodu.webp",
    demoUrl: "https://vod-u-front.onrender.com/",
    sourceUrl: "https://github.com/Copernichris/Vodu",
  },
  {
    title: "Mern Todolist",
    description: "A simple todo list app built using the mern stack.",
    imageUrl: "assets/merntodo.webp",
    demoUrl: "https://mern-todo-front.onrender.com/",
    sourceUrl: "https://github.com/Andydchoo/Mern-todo",
  },
  {
    title: "Project 5",
    description: "Description",
    imageUrl: "",
    demoUrl: "",
    sourceUrl: "",
  },
  {
    title: "Project 6",
    description: "Description",
    imageUrl: "",
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
                  <CardActions className="projects-card-actions">
                    <Button
                      size="small"
                      color="primary"
                      href={project.demoUrl || undefined}
                      target={project.demoUrl ? "_blank" : undefined}
                      rel={project.demoUrl ? "noopener" : undefined}
                      disabled={!project.demoUrl}
                    >
                      Demo
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href={project.sourceUrl || undefined}
                      target={project.sourceUrl ? "_blank" : undefined}
                      rel={project.sourceUrl ? "noopener" : undefined}
                      disabled={!project.sourceUrl}
                    >
                      Source
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
