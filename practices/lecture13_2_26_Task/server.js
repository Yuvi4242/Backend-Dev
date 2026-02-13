const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const filePath = path.join(__dirname, "students.json");

function readStudents() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
}

function writeStudents(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/students/register", (req, res) => {
  const students = readStudents();

  const newStudent = {
    id: Date.now(),
    name: req.body.name,
    branch: req.body.branch
  };

  students.push(newStudent);
  writeStudents(students);

  res.redirect("/students");
});

app.get("/students", (req, res) => {
  let students = readStudents();

  const branch = req.query.branch;
  if (branch) {
    students = students.filter(s => s.branch === branch);
  }

  res.render("students", {
    students,
    total: students.length
  });
});

app.get("/students/delete/:id", (req, res) => {
  let students = readStudents();
  students = students.filter(s => s.id != req.params.id);
  writeStudents(students);
  res.redirect("/students");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
