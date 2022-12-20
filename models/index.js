const Product = require('./product')
const Customer = require('./customer')
const Customer_order = require('./customer-order')
const Order_item = require('./order-item')

Customer.hasMany(Customer_order, {
    foreignKey: 'customer_id'
});

Order_item.hasMany(Product, {
    foreignKey: 'product_id'
})























module.exports = {Product, Customer, Customer_order, Order_item}