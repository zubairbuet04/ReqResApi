console.log("================nodemon testing fine");
const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploadPath')
    },
    filename: function (req, file, cb) {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage });

  app.get("/Register", upload.single("imgzub"), (req,res)=>{  //see the fileups.html for file_name=imgzub
    res.status(200).send("file is being uploaded");
  })