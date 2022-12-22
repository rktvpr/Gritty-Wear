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
<<<<<<< HEAD
                model: 'Order_item',
=======
                model: 'customer',
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
                key: 'id',
            },
        },
        purchase_date: {
<<<<<<< HEAD
            type: DataTypes.DATE,
=======
            type: DataTypes.DATEONLY,
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
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
<<<<<<< HEAD
        modelName: 'product',
=======
        modelName: 'customer_order',
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
    }
);

module.exports = Customer_order;