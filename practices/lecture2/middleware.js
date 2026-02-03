const express = require("express");

const app = express();

const PORT = 8000;

const data = [
  {
    id: 1,
    name: "yuvraj",
    branch: "CSE",
  },
  {
    id: 2,
    name: "sparsh",
    branch: "CSE",
  },
  {
    id: 3,
    name: "sahil",
    branch: "BBA",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome To Home Page!");
});

app.get("/student", (req, res) => {
  res.json(data);
});

app.get("/student/:id", (req, res) => {
  const id = req.params.id;
  const idx = data.findIndex((s) => s.id == id);
  res.json(data[idx]);
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});