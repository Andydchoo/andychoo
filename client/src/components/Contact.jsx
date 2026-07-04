import { React, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  Link,
  Container,
  Stack,
} from "@mui/material";
import Email from "@mui/icons-material/Email";

// - Todo
//    - Fix up spacing
//    - Color of text inside textboxes is too dark

//  - Issues
//    - Sm-med view has bug with footer

export default function Contact() {
  const [success, setSuccess] = useState();

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        console.log("Message sent");
        setSuccess("Message Sent!");
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <>
      <a className="contact-anchor" id="Contact" href="/#">
        a
      </a>
      <Container className="contact-layout">
        {/* Title/description */}
        <Stack className="contact-intro" direction="column">
          <Typography
            className="contact-title"
            variant="h2"
            fontWeight="600"
            align="center"
            gutterBottom
          >
            Contact Me
          </Typography>
          <Typography
            className="contact-description"
            variant="h6"
            align="center"
            gutterBottom
          >
            Want to get in touch? Send me a message, and I'll get back to you as
            soon as I can!
          </Typography>
          <Link
            className="contact-email"
            variant="h6"
            align="center"
            target="_blank"
            rel="noreferrer"
            href={`mailto:andydchoo@gmail.com`}
            underline="hover"
            gutterBottom
          >
            {/* Icon is not aligned properly */}
            <Email />
            {"AndyDChoo@gmail.com"}
          </Link>
        </Stack>

        {/* Contact Form Card */}
        <Card className="contact-card" elevation={5}>
          <Box
            className="contact-form"
            component="form"
            ref={form}
            onSubmit={handleSubmit}
          >
            <Stack className="contact-fields" direction="column">
              <TextField
                className="contact-field"
                label="Name"
                variant="outlined"
                fullWidth
                required
                name="user_name"
                margin="normal"
              />
              <TextField
                className="contact-field"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                name="user_email"
                margin="normal"
              />
              <TextField
                className="contact-field"
                label="Subject"
                variant="outlined"
                fullWidth
                required
                name="subject"
                margin="normal"
              />
              <TextField
                className="contact-field"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                required
                name="message"
                rows={4}
                margin="normal"
              />
              <Button
                className="contact-submit"
                variant="contained"
                color="primary"
                type="submit"
              >
                Send Message
              </Button>
              <Typography
                className="contact-status"
                variant="h6"
                align="center"
                gutterBottom
              >
                {success}
              </Typography>
            </Stack>
          </Box>
        </Card>
      </Container>
    </>
  );
}
