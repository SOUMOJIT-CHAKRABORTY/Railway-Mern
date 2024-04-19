import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { createTrain, deleteTrain } from "../../api";
import Login from "../User/Login";

const Admin = () => {
  const user = useSelector((state) => state.user);
  const [deleteField, setDeleteField] = useState("");
  const [createFields, setCreateFields] = useState({
    name: "",
    destination: "",
    startPoint: "",
    startDate: "",
    reachDate: "",
    price: "",
  });

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    createTrain(createFields)
      .then(() => {
        setCreateFields({
          name: "",
          destination: "",
          startPoint: "",
          startDate: "",
          reachDate: "",
          price: "",
        });
      })
      .catch((error) => console.error("Error creating train:", error));
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    deleteTrain(deleteField)
      .then(() => {
        setDeleteField("");
      })
      .catch((error) => console.error("Error deleting train:", error));
  };

  if (user.is_admin) {
    return (
      <Container maxWidth="md" sx={{ paddingTop: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome Administrator
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <form onSubmit={handleCreateSubmit}>
                <Typography variant="h5" gutterBottom>
                  Create Train
                </Typography>
                <TextField
                  label="Train Name"
                  fullWidth
                  value={createFields.name}
                  onChange={(e) =>
                    setCreateFields({ ...createFields, name: e.target.value })
                  }
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Destination"
                  fullWidth
                  value={createFields.destination}
                  onChange={(e) =>
                    setCreateFields({
                      ...createFields,
                      destination: e.target.value,
                    })
                  }
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Start Point"
                  fullWidth
                  value={createFields.startPoint}
                  onChange={(e) =>
                    setCreateFields({
                      ...createFields,
                      startPoint: e.target.value,
                    })
                  }
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Start Date"
                  fullWidth
                  type="date"
                  value={createFields.startDate}
                  onChange={(e) =>
                    setCreateFields({
                      ...createFields,
                      startDate: e.target.value,
                    })
                  }
                  InputLabelProps={{
                    shrink: true, // Automatically shrink the label when there's content
                  }}
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  label="Reach Date"
                  fullWidth
                  type="date"
                  value={createFields.reachDate}
                  onChange={(e) =>
                    setCreateFields({
                      ...createFields,
                      reachDate: e.target.value,
                    })
                  }
                  InputLabelProps={{
                    shrink: true, // Automatically shrink the label when there's content
                  }}
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Price"
                  fullWidth
                  type="number"
                  value={createFields.price}
                  onChange={(e) =>
                    setCreateFields({
                      ...createFields,
                      price: e.target.value,
                    })
                  }
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Create
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <form onSubmit={handleDeleteClick}>
                <Typography variant="h5" gutterBottom>
                  Delete Train
                </Typography>
                <TextField
                  label="Train ID"
                  fullWidth
                  value={deleteField}
                  onChange={(e) => setDeleteField(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  fullWidth
                >
                  Delete
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  } else if (user.name) {
    return (
      <Container maxWidth="md" sx={{ paddingTop: 4 }}>
        <Typography variant="h4" align="center">
          Administrators only
        </Typography>
      </Container>
    );
  } else {
    return <Login />;
  }
};

export default Admin;
