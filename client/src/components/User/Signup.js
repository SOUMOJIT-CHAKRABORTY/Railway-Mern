import React, { useState } from "react";
import { register } from "../../api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Signup() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.password === fields.confirm) {
      register(fields.name, fields.email, fields.password, fields.phone);
      setFields({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirm: "",
      });
    } else {
      console.log("Passwords don't match");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Set minimum height to fill the viewport
        backgroundColor: "#f5f5f5", // Set background color
      }}
    >
      <Box
        sx={{
          width: "300px",
          p: 3, // Padding
          borderRadius: "8px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Sign-Up
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          name="name"
          value={fields.name}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          value={fields.email}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Phone No"
          name="phone"
          value={fields.phone}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          value={fields.password}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          name="confirm"
          type="password"
          value={fields.confirm}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
