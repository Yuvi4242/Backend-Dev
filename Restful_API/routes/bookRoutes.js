const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");
const validateYear = require("../middleware/validateYear");

router.get("/", bookController.getBooks);
router.post("/", validateYear, bookController.addBook);
router.get("/search", bookController.searchBook);

module.exports = router;