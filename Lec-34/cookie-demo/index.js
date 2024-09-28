const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

app.use(cookieParser("some_secret"));

// Routes
app.get("/", (req, res) => {
  console.log(req.cookies["username"]);
  console.log(req.signedCookies);
  res.send(`Hello ${req.signedCookies['username']}`);
});

app.get("/set-cookie", (req, res) => {
  console.log("Hello from set-cookie route");
  res.cookie("username", "shreyance", { signed: true });
  res.send("Cookie set successfully!");
});

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
