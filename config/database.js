const { Sequelize } = require('sequelize');

// Create a connection to the PostgreSQL database
const sequelize = new Sequelize('mydatabase', 'postgres', 'passwordplaceholder', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;