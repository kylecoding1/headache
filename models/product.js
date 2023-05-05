const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');
const Tag = require('./Tags');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

Product.belongsToMany(Category, { through: 'ProductCategory' });
Product.belongsToMany(Tag, { through: 'ProductTag' });

module.exports = Product;
