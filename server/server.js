const express = require("express");
const app = express();
const cors = require("cors");

 
//TEST QUERY REMOVE BEFORE MERGING INTO MASTER
const sequelize = require("./config/db.config")
const initModels = require('./models/init-models')
const model = initModels(sequelize)


//middleware
const upload = require("./middleware/multer.js")

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
  model.Documents.findAll().then(users =>{
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

//define const for documentHandler

const doucmentHandler = require("./handlers/document.js");


app.post("/upload", upload.any(), doucmentHandler.uploadFile)


app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});