const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/db_config.js')[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const Company = sequelize.import('./Company');
db.Company = Company;

const User = sequelize.import('./User');
db.User = User;

db.User.associate(db);



module.exports = db;
