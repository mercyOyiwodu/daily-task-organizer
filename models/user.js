const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: false,
  },
}, {
  sequelize,
  timestamps: true
});

module.exports = User;
