const Sequelize = require('sequelize');
const db = require("../config/db.config")
module.exports = function(DataTypes) {
  return db.define('Documents', {
    id: {
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true
    },
    filename: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true
    },
    data: {
      type: "BYTEA",
      allowNull: true
    }
  }, {
    tableName: 'Documents',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Documents_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
