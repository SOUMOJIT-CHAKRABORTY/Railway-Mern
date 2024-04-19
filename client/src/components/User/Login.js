import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form.email, form.password));
    setForm({ email: "", password: "" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5", // Set background color
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
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
          Login
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          sx={{ mb: 2 }} // Margin bottom
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
          sx={{ mb: 2 }} // Margin bottom
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
}
