const Sequelize = require('sequelize');
const db = require("../config/db.config")
module.exports = function(DataTypes) {
  return db.define('Users', {
    id: {
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.DataTypes.UUID,
      allowNull: true
    },
    user_name: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: false
    },
    user_email: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: false
    },
    user_password: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: false
    },
    user_address: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true
    },
    user_bus: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true
    },
    ticket_num: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'Users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
