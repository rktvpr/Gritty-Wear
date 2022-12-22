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
<<<<<<< HEAD
=======
        order_id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
            references: {
                model: 'customer-order',
                key: 'id',
            },
        },
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
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
            references: {
<<<<<<< HEAD
                model: 'Customer',
=======
                model: 'Product',
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
                key: 'id',
            },
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