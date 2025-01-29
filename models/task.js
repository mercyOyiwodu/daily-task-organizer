const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class tasks extends Model {}

tasks.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    allowNull: false,
    type: DataTypes.UUID,
    reference: {
      model: 'users',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM,
    values: ['low', 'medium', 'high'],
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dueDate: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
});

module.exports = tasks;
