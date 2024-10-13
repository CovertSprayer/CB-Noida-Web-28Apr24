require("dotenv").config();
const Razorpay = require("razorpay");
const OrderModel = require("../../models/Order.model");
const { isLoggedIn } = require("../../middlewares/auth");
const router = require("express").Router();
const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;
router.post("/products/:productId/order", isLoggedIn, async (req, res) => {
  const { amount } = req.body;
  const userId = req.user._id;
  const { productId } = req.params;
  try {
    const instance = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: parseFloat(amount) * 100,
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    const finalOrder = await OrderModel.create({
      orderId: order.id,
      userId,
      productId,
      amount,
    });

    res.status(201).json({
      success: true,
      order: finalOrder,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    const {
      validatePaymentVerification,
    } = require("../../node_modules/razorpay/dist/utils/razorpay-utils");

    const isValid = validatePaymentVerification(
      { order_id: razorpay_order_id, payment_id: razorpay_payment_id },
      razorpay_signature,
      RAZORPAY_KEY_SECRET
    );

    if (isValid) {
      await OrderModel.updateOne(
        { orderId: razorpay_order_id },
        { payment: true }
      );
    }
    res.redirect("back");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong!");
  }
});

module.exports = router;
