// const express = require("express");
// const app = express();
// const PORT = 4000;

// app.set("view engine", "ejs"); 

// const students = [
//   { id: 1, Name: "Yuvraj", branch: "CSE" },
//   { id: 2, Name: "Ayush", branch: "MECH" },
//   { id: 3, Name: "Sahil", branch: "IT" }
// ];

// app.get("/", (req, res) => {
//   res.render("index", { students }); 
// });
// app.use(express.urlencoded({ extended: true })); // form data read karne ke liye

// app.post("/students/register", (req, res) => {
//   console.log(req.body); // server side data
//   res.send("Student Registered Successfully");
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require("express");
const app = express();
const PORT = 4000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const students = [
  { id: 1, name: "Yuvraj", branch: "CSE" },
  { id: 2, name: "Ayush", branch: "MECH" },
  { id: 3, name: "Sahil", branch: "IT" }
];

// Home page show students
app.get("/", (req, res) => {
  res.render("index", { students });
});

// Form submit
app.post("/students/register", (req, res) => {
  const { name, branch } = req.body;

  students.push({
    id: students.length + 1,
    name,
    branch
  });

  res.redirect("/"); // same page reload with updated data
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
