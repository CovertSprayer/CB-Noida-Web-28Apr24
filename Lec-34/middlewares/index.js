const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function customMiddleware(req, res, next) {
  console.log("Hello from custom Middleware");
  res.send("hello from custom Middleware.");
  // next();
}

function isAuthorized(req, res, next) {
  const KEY = "abcd1234";
  const { key } = req.query;
  if (key !== KEY) {
    return res.send("Not Authorized!");
  }
  next();
}

// app.use("/", isAuthorized);

// Routes
app.get("/", customMiddleware, (req, res) => {
  res.send("Working Fine!");
});

app.get("/secret", isAuthorized, (req, res) => {
  res.send("This is my secret!!");
});

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
