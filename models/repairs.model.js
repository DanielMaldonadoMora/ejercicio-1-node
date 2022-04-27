const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

//users
const Repair = db.define('repair', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
});

module.exports = { Repair };
