const express = require("express");
const UserModel = require("../models/User.model");
const router = express.Router();
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/createToken");
const {login} = require('../controllers/authController')

router.post("/register", async (req, res) => {
  try {
    const { email, fullName, password } = req.body;
  
    // check if user already exists?
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      res.status(400).json({
        message: "User already exists",
      });
    }
  
  //   hash pasword
    const hashedPassword = await bcrypt.hash(password, 10);
  
    //  create user
    const user = await UserModel.create({email, fullName, password: hashedPassword});
    const token = createToken({
      id: user._id
    });
  
    res.status(201).json({
      success:true,
      id: user._id,
      email: user.email,
      fullName: user.fullName,
      token: token
    })
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
  }
});

router.post("/login", login)

module.exports = router;
