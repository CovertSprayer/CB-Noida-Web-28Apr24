const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const session = require("express-session");
const mongoose = require("mongoose");
const userModal = require("./models/user.modal");

mongoose
  .connect("mongodb://127.0.0.1:27017/auth-demo")
  .then(() => console.log("DB Connected!"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "abcd1234",
    cookie: {
        maxAge: 20 * 1000
        // maxAge: 30 * 24 * 60 * 60 * 1000
    },
  })
);

// Set EJS as Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

function isLoggedIn(req, res, next) {
  console.log(req.session);

  if (!req.session.user) {
    res.redirect("/login");
    return;
  }
  next();
}

app.use((req, res, next) => {
  if (req.session.user) app.locals.user = req.session.user;

  next();
});

// Routes
app.get("/", isLoggedIn, (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("back");
    return;
  }
  res.render("login");
});

app.get("/register", (req, res) => {
  if (req.session.user) {
    res.redirect("back");
    return;
  }
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await userModal.findOne({ username });
  if (user) {
    res.send("User already exists");
    return;
  }
  await userModal.create({ username, email, password });
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModal.findOne({ username });
  if (!user) {
    res.redirect("/register");
    return;
  }
  if (user.password !== password) {
    res.send("Invalid Creds!");
    return;
  }
  req.session.user = user;

  res.redirect("/");
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    // delete req.session.user;
    res.redirect('/login');
})

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
