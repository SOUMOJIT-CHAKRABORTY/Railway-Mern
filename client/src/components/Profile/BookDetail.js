import { useState, useEffect } from "react";
import { Typography, Button, Card, CardContent, Grid } from "@mui/material";
import { getTrain } from "../../api";

const BookDetail = (props) => {
  const [train, setTrain] = useState({});

  useEffect(() => {
    getTrain(props.book.train)
      .then((res) => setTrain(res))
      .catch((err) => console.log(err));
  }, [props.book.train]);

  const handleDelete = () => {
    props.onDelete(props.book._id);
  };

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h6">{train.name}</Typography>
            <Typography variant="body1">
              From: {train.startpoint} to {train.destination}
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="right">
            <Button
              variant="outlined"
              color="error"
              onClick={handleDelete}
              sx={{ minWidth: 0 }}
            >
              X
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BookDetail;
