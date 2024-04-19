import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

export default function ButtonAppBar() {
  const user = useSelector((state) => state.user);

  const renderAuthButtons = () => {
    if (!user.name) {
      // Display login and signup buttons if user is not logged in
      return (
        <>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </>
      );
    } else {
      // Display logout button and user's name if user is logged in
      return (
        <>
          <Typography
            variant="h6"
            component={Link}
            to="/profile"
            sx={{
              color: "inherit",
              marginRight: "16px",
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
          >
            Hello, {user.name}
          </Typography>
          <Button color="inherit" component={Link} to="/logout">
            Logout
          </Button>
        </>
      );
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F8453B" }}>
      <Toolbar>
        {/* Home Link */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            M-Ticket Booking
          </Link>
        </Typography>
        {/* Search Box with Icon Button */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            style: {
              color: "white",
              //   backgroundColor: "white", // Set background color to white
              border: "1px solid white", // Add border style
              height: "44px", // Set height
              borderRadius: "44px", // Add border radius
            },
            endAdornment: (
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => {
                  // Add your search logic here
                  console.log("Search button clicked");
                }}
              >
                <SearchIcon />
              </IconButton>
            ),
          }}
          sx={{
            marginRight: "16px", // Add right margin
          }}
        />
        {/* Conditionally render login/logout buttons */}
        {renderAuthButtons()}
      </Toolbar>
    </AppBar>
  );
}
