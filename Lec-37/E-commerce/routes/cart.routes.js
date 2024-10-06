const { isLoggedIn } = require("../middlewares/auth");
const UserModel = require("../models/User.model");

const router = require("express").Router();

router.post("/cart/add", isLoggedIn, async (req, res) => {
  const { productId } = req.body;
  const userId = req.user._id;

  const user = await UserModel.findById(userId);
  const productIndex = user.cart.findIndex(
    (item) => item.product == productId
  );

  if(productIndex == -1){
    user.cart.push({product: productId, quantity: 1})
  }
  else{
    user.cart[productIndex].quantity++;
  }

  await user.save();

  req.flash('success', 'Product added to cart!');
  res.redirect('back');
});

module.exports = router;
