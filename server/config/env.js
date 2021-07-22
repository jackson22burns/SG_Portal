
const env = {
    database: 'sb_portal',
    username: 'postgres',
    password: 'test',
    host: 'localhost',
    dialect: 'postgres',
    port:8081,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  };
   
  module.exports = env;