console.log("================nodemon testing fine");
const express = require("express");
//const multer = require("multer");
const app = express();

app.get("/", (req,res)=>{
   res.send("Hello")
})

app.post("/", (req,res)=>{ //POST API with URL Query, Body and Header Properties
    let a = req.query.StudentName
    let b = req.query.StudentID
    let c =req.query.Grade
    let userName = req.header("userName")
    let password = req.header("password")

    res.send(a+" "+b+" "+c)
    res.send("User Name:" +userName, +" Password: " +password)
})
app.listen(8000, ()=>{
    console.log("Server runs absolutely fine")
});
