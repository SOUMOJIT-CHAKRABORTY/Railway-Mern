import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../../actions/book";
import BookDetail from "./BookDetail";
import {
  Container,
  Typography,
  Avatar,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { deleteBook } from "../../api";

const profileImage =
  "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const onDelete = async (id) => {
    const data = await deleteBook(id);
    console.log(data);
    dispatch(getBooks()); // Reload books after deletion
  };

  const filt_books = books.filter((book) => book.user.includes(user.id));

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Avatar
                src={profileImage}
                alt="Profile Image"
                sx={{ width: 120, height: 120, margin: "auto" }}
              />
              <Typography variant="h5" component="h2" sx={{ marginTop: 2 }}>
                {user.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Email: {user.email}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Phone Number: {user.phone}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" sx={{ marginBottom: 3 }}>
                Trains Booked
              </Typography>
              {filt_books.map((book) => (
                <BookDetail key={book._id} book={book} onDelete={onDelete} />
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
