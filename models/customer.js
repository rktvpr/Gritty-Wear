const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Customer extends Model {}

Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      p_word: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'customer',
    }
  );
  
  module.exports = Customer;