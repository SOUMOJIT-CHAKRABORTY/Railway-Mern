import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrains } from "../../actions/trains";
import TrainItem from "./TrainItem";
import { Container, Grid, TextField } from "@mui/material";
import backgroundImage from "../../images/main-background.png"; // Import the image
import SearchBar from "./SearchBar";

const SearchTrain = ({ onChange }) => {
  return (
    <div
      style={{
        background: `url(${backgroundImage}) center/cover no-repeat`,
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        // padding: "20px",
        marginTop: "8px",
        // width: "1400px",
      }}
    >
      {/* <TextField
        // fullWidth
        variant="outlined"
        // label="Search Train"
        onChange={onChange}
        placeholder="Search Train"
        InputProps={{
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "40px",
            padding: "10px 20px",
            width: "500px",
            height: "50px",
            transform: "translateY(80px)",
          },
        }}
      /> */}
      <div style={{ transform: "translateY(100px)" }}>
        <SearchBar />
      </div>
    </div>
  );
};

const Trains = () => {
  const trains = useSelector((state) => state.trains);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getTrains());
  }, [dispatch]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filt_trains = trains.filter((train) => {
    const searchTerm = search.trim();
    return train.name.toLowerCase().includes(searchTerm);
  });

  return (
    <Container maxWidth="lg">
      <SearchTrain onChange={onChangeSearch} />
      <Grid container spacing={2}>
        {filt_trains.map((train) => (
          <Grid item key={train._id} xs={12}>
            <TrainItem train={train} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Trains;
