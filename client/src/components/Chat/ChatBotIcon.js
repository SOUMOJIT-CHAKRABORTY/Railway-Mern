import React, { useState } from "react";
import {
  Fab,
  Modal,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const ChatBotIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Implement logic to send message (e.g., API call)
    console.log("Message sent:", message);
    // Clear message input
    setMessage("");
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <ChatIcon />
      </Fab>
      <Modal
        open={isChatOpen}
        onClose={toggleChat}
        aria-labelledby="chat-modal-title"
        aria-describedby="chat-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          style={{
            padding: "20px",
            minWidth: "300px",
            maxWidth: "80vw",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h5" id="chat-modal-title" gutterBottom>
            Chat with us
          </Typography>
          <TextField
            id="chat-message"
            label="Type a message..."
            variant="outlined"
            fullWidth
            value={message}
            onChange={handleMessageChange}
            style={{ marginBottom: "16px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default ChatBotIcon;
