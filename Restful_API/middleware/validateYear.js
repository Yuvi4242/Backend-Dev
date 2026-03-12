function validateYear(req, res, next) {

 const year = req.body.year;

 if (typeof year !== "number" || year < 1900 || year > 2100) {
  return res.status(400).json({ message: "Invalid year" });
 }

 next();
}

module.exports = validateYear;