const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");

let allStudents = [];

app.get("/", (req,res)=>{
  res.render("students",{ allStudents });
});

app.post("/students/register",(req,res)=>{
  const { name, branch } = req.body;
  allStudents.push({ name, branch });
  res.redirect("/");
});

app.listen(3000,()=>{
  console.log("Server running on port 3000");
});
