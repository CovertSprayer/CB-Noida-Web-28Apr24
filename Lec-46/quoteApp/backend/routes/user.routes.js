const { isAuthenticate } = require('../middlewares/isAuthenticate');
const QuoteModel = require('../models/Quote.model');
const UserModel = require('../models/User.model');
const router = require('express').Router();

router.get('/me', isAuthenticate, async (req, res,) => {
  try {
      const userId = req.user.id;
      const user = await UserModel.findById(userId).select("-password");
      const quotes = await QuoteModel.find({author: userId});
      res.status(200).json({
        user,
        quotes
      })
  } catch (error) {
    res.status(500).json({
      success:false,
      message: "Something went wrong"
    })
  }
})

module.exports = router;