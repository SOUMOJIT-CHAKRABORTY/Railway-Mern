import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";
import { ToastContainer, toast } from "react-toastify/dist/react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch logout action on component mount
    dispatch(logout());
    // Show toast notification for logout success
    toast.success("Logout Success", {
      position: "top-center",
      autoClose: 2000, // Close after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, [dispatch]);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
      maxWidth="md"
    >
      <Typography
        variant="h1"
        sx={{
          color: (theme) => theme.palette.text.primary,
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Logging Out...
      </Typography>
      <ToastContainer />
    </Container>
  );
}
