const Sequelize = require('sequelize');
const db = require("../config/db.config")
module.exports = function(DataTypes) {
  return db.define('Tests', {
    id: {
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    test_id: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'Tests',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Tests_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
