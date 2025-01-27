const { Model, DataTypes } = require('sequelize');


const sequelize = require('../database/sequelize');

class Task extends Model {}

Task.init({
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
  },
  
}, {
  sequelize,
  modelName: 'Task',
  tableName: 'tasks',
  timestamps: true,
});

module.exports = Task;
