const express = require("express");
const ProductModel = require("../models/Product.model");
const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await ProductModel.find();
  res.render("products/list", {
    products,
  });
});

router.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id);
  res.render("products/show", { product });
});

module.exports = router;
