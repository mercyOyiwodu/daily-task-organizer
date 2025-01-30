const express = require('express');
const cors = require('cors');
const sequelize = require('./database/sequelize');
const taskRoutes = require('./routes/tasksRouter');

const PORT = 4578;

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRoutes); // UserRoutes has been removed

const server = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
server();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
