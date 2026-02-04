const express=require("express");

const app=express();

const PORT =8000;
app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/users",(req,res)=>{
    res.send("<h1>this is users page</h1> ")
})
const students=[
    {id:1,name:"yuvraj", branch:"CS"},
    {id:2,name:"sahil", branch:"ECE"},
    {id:3,name:"ayush", branch:"Ec"},
    {id:4,name:"sparsh", branch:"Cyber"}

]
app.get("/users/:id",(req,res)=>{
    const userId=req.params.id
    res.send(`You are requesting for User Id:${userId}`)
})
app.get("/students/search" ,(req,res)=>{
    const branch=req.query.branch;
    console.log("branch",branch);
    if(!branch){
        return res.json(students);
    }
    const foundStudents=students.filter(s=>s.branch==branch);
    res.json(foundStudents);

})

    

app.get("/students/:id",(req,res)=>{
    const id =req.params.id;

    const arrayIndex=students.findIndex(s=>s.id==id);
    if(arrayIndex<0){
        return res.status(404).send("Student not found");
    }

    const data =students[arrayIndex];
    res.json(data);



})

app.listen(PORT,()=>{
    console.log(`Server is Running on port:${PORT}`)
})