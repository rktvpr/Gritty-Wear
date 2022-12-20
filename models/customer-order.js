const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Customer_order extends Model { }

Customer_order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
            references: {
                model: 'customer',
                key: 'id',
            },
        },
        purchase_date: {
            type: DataTypes.DATEONLY,
            allowNUll: false,
        },
        o_status: {
            type: DataTypes.STRING,
            allowNUll: false,
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

module.exports = Customer_order;