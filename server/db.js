//connect server to database
//using pg library we downloaded with npm

//TODO: remove this and use sequelize
const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "test",
  port: 8081,
  database: "sb_portal"
});

module.exports = pool;