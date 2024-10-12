const { isLoggedIn } = require("../../middlewares/auth");
const UserModel = require("../../models/User.model");
const router = require("express").Router();

router.post("/wishList/:itemId", isLoggedIn, async (req, res) => {
  try {
    const userId = req.user._id;
    const itemId = req.params.itemId;

    const user = await UserModel.findById(userId);
    const itemIndex = user.wishList.findIndex(
      (productId) => productId == itemId
    );

    let message;
    if (itemIndex == -1) {
      user.wishList.push(itemId);
      message = "Item added to wishList";
    } else {
      user.wishList.splice(itemIndex, 1);
      message = "Item removed from wishList";
    }
    //   itemIndex == -1
    //     ? user.wishList.push(itemIndex)
    //     : user.wishList.splice(itemIndex, 1);

    await user.save();

    res.status(200).json({
      success: true,
      message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
});

module.exports = router;
