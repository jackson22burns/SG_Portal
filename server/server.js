const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
 
//TEST QUERY REMOVE BEFORE MERGING INTO MASTER
const sequelize = require("./config/db.config")
const initModels = require('./models/init-models')
const model = initModels(sequelize)

//middleware


app.use(cors());
app.use(express.json());

//https://grokonez.com/node-js/sequelize/node-js-express-rest-api-postgresql-example-upload-file-download-file-multer-sequelize-crud

//routes

app.get("/",(req,res) => {
  res.json({"Index Route":"SBA Application"})
})

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.get("/test", function(req,res){
  model.Tests.findAll().then(users =>{
    res.json(users)
  }).catch(err =>{
    console.log(err)
    res.json({msg: 'Error', detail:err})
  })
})

/* 
1. Upload the file
   a. 
2. Verify the file uploaded

3. Define function called FileCreate

   req.document.filename,
   req.file.buffer


   try catch


*/

app.post("/fileUpload", function(req,res){
    model.documents.create({
      //pass in reqs
    }).then(() => {
      res.json({msg:"File uploaded succesfully: " + req.document.filename})
    }).catch(err=>{
      console.log(err)
      res.json({msg: "Error in uploading file: " + err})
    })
})


app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});