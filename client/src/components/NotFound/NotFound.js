import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Use 100% of viewport height
        textAlign: "center",
      }}
    >
      <img
        src="https://i.redd.it/2pitm8mrnnc31.png"
        alt="logo loading error"
        style={{ maxWidth: "100%", marginBottom: "16px" }}
      />
      <Typography variant="h3" component="h1" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Container>
  );
};

export default NotFound;
