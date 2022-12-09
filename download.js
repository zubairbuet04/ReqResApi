console.log("================nodemon testing fine");
const express = require("express");
//const multer = require("multer");
const app = express();

app.get("/Download", (req,res)=>{
   res.download("./img.jpg") //single dot will do because getting out of this file will make it happen, these two are under the same folder
   res.send("download successful")
})
app.listen(8080, ()=>{
    console.log("=======Server runs successfully")
})