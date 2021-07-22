const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
 


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


app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});