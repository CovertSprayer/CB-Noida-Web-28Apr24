const { isLoggedIn } = require("../middlewares/auth");
const UserModel = require("../models/User.model");

const router = require("express").Router();

router.get("/cartItems", isLoggedIn, async (req, res) => {
  const user = await UserModel.findById(req.user._id).populate("cart.product");

  // let totalPrice = 0;
  // for(let item of user.cart){
  //   totalPrice += item.product.price * item.quantity;
  // }

  const totalPrice = user.cart.reduce((acc, item) => {
    return acc + (item.product.price * item.quantity);
  }, 0)

  res.render("cart/index", { productsInCart: user.cart, totalPrice  });
});

router.post("/cartItems/:id/add", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const user = await UserModel.findById(userId);
  const productIndex = user.cart.findIndex((item) => item.product == id);

  if (productIndex == -1) {
    user.cart.push({ product: id, quantity: 1 });
  } else {
    user.cart[productIndex].quantity++;
  }

  await user.save();

  req.flash("success", "Product added to cart!");
  res.redirect("back");
});

router.post("/cartItems/:id/remove", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const user = await UserModel.findOne({ _id: userId });

  const existingProductIndex = user.cart.findIndex(
    (item) => item.product == id
  );

  if (existingProductIndex !== -1) {
    const existingProduct = user.cart[existingProductIndex];

    if (existingProduct.quantity > 1) {
      existingProduct.quantity--;
    } else {
      user.cart.splice(existingProductIndex, 1);
    }

    await user.save();
  }

  res.redirect("back");
});

module.exports = router;
