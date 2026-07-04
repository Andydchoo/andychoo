import * as React from "react";
import {
  Card,
  CardContent,
  Stack,
  Box,
  Typography,
  Container,
} from "@mui/material";

const skillGroups = [
  {
    title: "Front-end",
    skills: [
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
      { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Sanity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sanity/sanity-original.svg" },
      { name: "Strapi", icon: "https://cdn.simpleicons.org/strapi/4945ff" },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <a className="skills-anchor" id="Skills" href="/#">
        a
      </a>
      <Card className="skills" elevation={4}>
        <Box className="skills-inner">
          <Container>
            <Typography
              className="skills-title"
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              My Technical Skills
            </Typography>
            <Stack className="skills-list" direction="row">
              {skillGroups.map((group) => (
                <Card className="skills-card" elevation={3} key={group.title}>
                  <CardContent className="skills-card-content">
                    <Typography
                      className="skills-card-title"
                      gutterBottom
                      variant="h4"
                      component="h2"
                    >
                      {group.title}
                    </Typography>
                  </CardContent>
                  <Card className="skills-card-grid">
                    {group.skills.map((skill) => (
                      <div className="skills-card-item" key={skill.name}>
                        <img className="skills-card-icon" src={skill.icon} alt="" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </Card>
                </Card>
              ))}
            </Stack>
          </Container>
        </Box>
      </Card>
    </>
  );
}
