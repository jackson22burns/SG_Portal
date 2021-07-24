const env = require('./env.js');
 
const Sequelize = require('sequelize');
const db = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  port: env.port,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
 

//db.files = require('../models/file.model.js')(sequelize, Sequelize);
 

//this checks to ensure sequelize connected to db as set in env.js

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = db;