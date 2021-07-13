const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.get("/", authorize, async (req, res) => {
  try {
    //res.json(req.user);
    const user = await pool.query(
      "SELECT user_name, user_address, user_bus, ticket_num FROM users WHERE user_id = $1",
      [req.user.id] 
    ); 
    res.json(user.rows[0]);
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    //res.json(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});



module.exports = router;