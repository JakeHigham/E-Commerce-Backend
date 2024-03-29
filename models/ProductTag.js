const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}
const Product = require('./Product');
const Tag = require('./Tag');

ProductTag.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    
    product_id: {
      type: DataTypes.INTEGER,
      references: Product.id
    },

   
    tag_id: {
      type: DataTypes.INTEGER,
      references: Tag.id
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
