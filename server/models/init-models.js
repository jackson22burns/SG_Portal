var DataTypes = require("sequelize").DataTypes;
var _Documents = require("./Documents");
var _SequelizeMeta = require("./SequelizeMeta");
var _Tests = require("./Tests");
var _Users = require("./Users");

function initModels(sequelize) {
  var Documents = _Documents(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Tests = _Tests(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);


  return {
    Documents,
    SequelizeMeta,
    Tests,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
