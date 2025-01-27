const express = require('express');
const cors =require('cors')
const sequelize =require('./database/sequelize')
const routes = require('./routes/tasksRouter');
const router = require('./routes/taskDetailsRouter')


const PORT = 3000;

const app=express();
app.use(cors());
app.use(express.json());
app.use(routes)
app.use(router)
const server = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:',error);
}
}
server()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
