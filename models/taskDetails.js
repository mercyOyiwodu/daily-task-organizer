const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database/sequelize');
const Task = require('./task');

class TaskDetails extends Model {}

TaskDetails.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  taskId: {
    type: DataTypes.UUID, 
    references: {
      model: Task,
      key: 'id',
    },
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'TaskDetails',
  tableName: 'TaskDetails',
  timestamps: true,
});


Task.hasMany(TaskDetails, { foreignKey: 'taskId' });
TaskDetails.belongsTo(Task, { foreignKey: 'taskId' });

module.exports = TaskDetails;
