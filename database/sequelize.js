const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('sql10760451', 'sql10760451', '4Ld7cVSNfH', {
  host: 'sql10.freesqldatabase.com',
  dialect: 'mysql',
});

module.exports = sequelize;

