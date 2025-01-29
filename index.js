const express = require('express');
const cors = require('cors');
const sequelize = require('./database/sequelize');
const taskRoutes = require('./routes/tasksRouter');
const UserRoutes = require('./routes/userRouter');

const PORT = 4578;

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(taskRoutes);

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
