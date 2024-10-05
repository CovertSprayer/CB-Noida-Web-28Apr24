const UserModel = require("../models/User.model");
const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  const { username, email, password, role } = req.body;
  const user = new UserModel({
    username,
    email,
    role,
  });
  await UserModel.register(user, password);
  res.redirect('/login')
});

module.exports = router;
