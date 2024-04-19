import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const SearchBar = () => {
  const [fromStation, setFromStation] = useState("New Delhi");
  const [toStation, setToStation] = useState("Kalyan Jn");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Search button clicked");
  };

  return (
    <form
      className="search-widget"
      style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* From Station Input */}
        <Grid item xs={12} sm={4}>
          <TextField
            id="from-station"
            variant="outlined"
            fullWidth
            label="FROM STATION"
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TrainIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <span className="stn-code">NDLS</span>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Swap Icon */}
        <Grid item xs={12} sm={1} textAlign="center">
          <IconButton onClick={() => {}}>
            <SwapHorizIcon />
          </IconButton>
        </Grid>

        {/* To Station Input */}
        <Grid item xs={12} sm={4}>
          <TextField
            id="to-station"
            variant="outlined"
            fullWidth
            label="TO STATION"
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TrainIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <span className="stn-code">KYN</span>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Date Input */}
        <Grid item xs={12} sm={2}>
          <TextField
            id="date"
            variant="outlined"
            fullWidth
            label="DATE"
            type="date"
            defaultValue="2024-04-18"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Search Button */}
        <Grid item xs={12} sm={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            disabled={false} // Set disabled to true if search criteria are invalid
            fullWidth
            className="search-btn"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
