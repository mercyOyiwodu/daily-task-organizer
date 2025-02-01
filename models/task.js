const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Tasks extends Model {}

Tasks.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'tasks',
  timestamps: true,
});

module.exports = Tasks;
