const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class TaskDetails extends Model {}

TaskDetails.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
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
  taskId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'tasks',
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: "task_details",
  timestamps: true,
});

module.exports = TaskDetails;
