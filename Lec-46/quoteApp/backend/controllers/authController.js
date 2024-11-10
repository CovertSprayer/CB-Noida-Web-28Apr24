const { createToken } = require("../utils/createToken");
const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        // check if user exists?
        const user = await UserModel.findOne({email});
    
        if(user){
            // check if valid password
            const isValid = await bcrypt.compare(password, user.password);
            if(!isValid){
                //  user exists but invalid password
                return res.status(400).json({
                    success:false,
                    message: "Invalid Credentials"
                })
            }

            // user exists and valid password
            return res.status(200).json({
                success:true,
                id: user._id,
                email: user.email,
                fullName: user.fullName,
                token: createToken({id: user._id})
            })
        }
    
        // user or password invalid
        res.status(400).json({
            success:false,
            message: "Invalid Credentials"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
}

const register = async (req, res) => {
    try {
      const { email, fullName, password } = req.body;
    
      // check if user already exists?
      const userExists = await UserModel.findOne({ email });
      if (userExists) {
        res.status(400).json({
          message: "User already exists",
        });
      }
    
    //   hash password
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
  }

module.exports = {
    login,
    register
}