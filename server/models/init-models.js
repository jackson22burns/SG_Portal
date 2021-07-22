var DataTypes = require("sequelize").DataTypes;
var _documents = require("./documents");
var _users = require("./users");

function initModels(sequelize) {
  var documents = _documents(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  documents.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(documents, { as: "documents", foreignKey: "user_id"});

  return {
    documents,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
