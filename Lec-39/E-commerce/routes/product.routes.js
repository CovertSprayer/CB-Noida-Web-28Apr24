const express = require("express");
const ProductModel = require("../models/Product.model");
const { validator } = require("../middlewares/validator");
const { productSchema } = require("../validation/product");
const { isLoggedIn, isSeller } = require("../middlewares/auth");
const router = express.Router();

router.get("/products", async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.render("products/list", {
      products,
    });
  } catch (err) {
    // res.send('Internal server error!')
    // res.render("error", { err: "Internal Server Error!" });
    next(err)
  }
});

router.get("/products/new", isLoggedIn, isSeller, async (req, res) => {
  try {
    res.render("products/new");
  } catch (err) {
    next(err)
  }
});

router.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id).populate("reviews");
    res.render("products/show", { product });
  } catch (err) {
    next(err)
  }
});

router.post(
  "/products",
  isLoggedIn,
  isSeller,
  validator(productSchema),
  async (req, res) => {
    const body = req.body;
    await ProductModel.create(body);

    req.flash("success", "Product added successfully!");
    res.redirect("/products");
  }
);

router.get("/products/:id/edit", isLoggedIn, isSeller, async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id);
  res.render("products/edit", { product });
});

router.put("/products/:id", isLoggedIn, isSeller, async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  // const product = await ProductModel.findByIdAndUpdate(id, body);
  const product = await ProductModel.findById(id);

  if (body.title) product.title = body.title;
  if (body.price) product.price = body.price;
  if (body.image) product.image = body.image;
  if (body.description) product.description = body.description;

  await product.save();

  req.flash("success", "Product updated successfully!");
  res.redirect("/products");
});

router.delete("/products/:id", isLoggedIn, isSeller, async (req, res) => {
  const { id } = req.params;
  await ProductModel.findByIdAndDelete(id);

  req.flash("success", "Product deleted successfully!");
  res.redirect("/products");
});

module.exports = router;
