const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    xsSize: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
    sSize: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
    mSize: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
    lSize: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
    xlSize: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    pName: {
      type: DataTypes.STRING,
      allowNull: false,
    },


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