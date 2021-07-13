//connect server to database
//using pg library we downloaded with npm
const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Bags&Co",
  port: 5432,
  database: "sb_portal"
});

module.exports = pool;