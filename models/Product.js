// Import sequelize library
const { Model, DataTypes } = require('sequelize');
// Import connection.js 
const sequelize = require('../config/connection');



class Product extends Model { }
const Category = require('./Category');


Product.init(
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },


    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },


    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },


    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isInt: true,
      }
    },


    category_id: {
      type: DataTypes.INTEGER,
      references: Category.id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
