import { useSelector } from "react-redux";
import { createBook } from "../../api/index";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const TrainItem = (props) => {
  const user = useSelector((state) => state.user);

  const buttonClick = async () => {
    try {
      const { data } = await createBook(user.id, props.train._id);
      console.log(data);
    } catch (error) {
      console.error("Error booking train:", error);
    }
  };

  const isUserLoggedIn = !!user.name;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "8px",
        // marginTop: "10px",
      }}
    >
      <Card
        variant="outlined"
        style={{
          maxWidth: "600px", // Set maximum width for the card
          width: "100%",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
          },
        }}
      >
        <CardContent style={{ paddingBottom: "16px" }}>
          <Typography variant="h6" gutterBottom>
            {props.train.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            From: {props.train.startpoint} - To: {props.train.destination}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Starting Date: {props.train.startDate.slice(0, 10)}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ticket Price: {props.train.price} Rs
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            disabled={!isUserLoggedIn}
            onClick={buttonClick}
          >
            Book Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TrainItem;
