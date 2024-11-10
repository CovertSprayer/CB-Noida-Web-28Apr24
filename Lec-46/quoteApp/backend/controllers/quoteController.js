const QuoteModel = require("../models/Quote.model");
const UserModel = require("../models/User.model");

const getQuotes = async (req, res) => {
  try {
    const quotes = await QuoteModel.find().populate({
      path: "author",
      select: "fullName",
      // select: '-password'
    });
    res.status(200).json(quotes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getQuoteById = async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await QuoteModel.findById(id);
    res.status(200).json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const createQuote = async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.user.id;
    const user = await UserModel.findById(userId);
    const quote = await QuoteModel.create({ text, author: user });
    res
      .status(201)
      .json({
        ...quote.toObject(),
        author: { id: quote.author._id, fullName: quote.author.fullName },
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const updateQuote = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const quote = await QuoteModel.findByIdAndUpdate(id, body);
    res.status(200).json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const deleteQuote = async (req, res) => {
  try {
    const id = req.params.id;
    await QuoteModel.deleteById(id);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getQuotes,
  getQuoteById,
  createQuote,
  updateQuote,
  deleteQuote,
};
