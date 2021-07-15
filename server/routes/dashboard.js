const router = require("express").Router();
const authorize = require("../middleware/authorize");
const multer = require("multer");
const pool = require("../db");

// multer middleware
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
})

const upload = multer({storage: fileStorageEngine});

// routes

router.get("/", authorize, async (req, res) => {
  try {
    //res.json(req.user);
    const user = await pool.query(
      "SELECT user_name, user_address, user_bus, ticket_num FROM users WHERE user_id = $1",
      [req.user.id] 
    ); 
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post('/documents', upload.single("upload"), (req, res) => {
  console.log(req.file);
  res.send("Single File upload success");
});

module.exports = router;