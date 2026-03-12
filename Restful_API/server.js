const express = require("express");
const app = express();

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");

app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});