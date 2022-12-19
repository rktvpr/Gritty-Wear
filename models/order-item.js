const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Order_item extends Model { }

Order_item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNUll: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNUll: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNUll: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_item',
    }
);

module.exports = Order_item;