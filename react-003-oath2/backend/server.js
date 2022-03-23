const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

const REACT_APP_GOOGLE_CLIENT_ID =
  "110446158473-m51f4lnkbdhicq52jg0qqtopkdugn5su.apps.googleusercontent.com";

const googleOAuth2Client = new OAuth2Client(REACT_APP_GOOGLE_CLIENT_ID);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/v1/auth/google", async (req, res) => {
  const { token } = req.body;
  const ticket = await googleOAuth2Client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  console.log("Ticket::::", ticket);
  res.status(201);
  res.json({ name, email, picture });
});

app.listen(5000, () => {
  console.log("Server started on host: http://localhost:5000");
});
