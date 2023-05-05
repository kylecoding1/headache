const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// Define models and associations
db.Category = require('./Category')(db.sequelize, Sequelize);
db.Product = require('./product')(db.sequelize, Sequelize);
db.Tag = require('./Tag')(db.sequelize, Sequelize);

// Define relationships between models
db.Product.belongsToMany(db.Category, { through: 'ProductCategory' });
db.Product.belongsToMany(db.Tag, { through: 'ProductTag' });
db.Category.belongsToMany(db.Product, { through: 'ProductCategory' });
db.Tag.belongsToMany(db.Product, { through: 'ProductTag' });

module.exports = db;
