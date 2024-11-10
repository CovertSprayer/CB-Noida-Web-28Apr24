const router = require("express").Router();
const quoteController = require("../controllers/quoteController");
const {isAuthenticate} = require('../middlewares/isAuthenticate');

router.get("/", quoteController.getQuotes);
router.get("/:id", quoteController.getQuoteById);
router.post("/", isAuthenticate, quoteController.createQuote);
router.put("/:id", isAuthenticate, quoteController.updateQuote);
router.delete("/:id", isAuthenticate, quoteController.deleteQuote);

module.exports = router;