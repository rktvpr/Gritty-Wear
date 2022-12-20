const Order_item = require('../models/order-item');

async function getOrderItems(){
    return await Order_item.findAll();
}

async function createOrderItem(order_item){
    await Order_item.create(order_item);
}

async function getOrderItem(id){
    return await Order_item.findByPk(id);
}

async function updateOrderItem(order_item, id){
    console.log(order_item)
    await Order_item.update({
        total: order_item.total,
        quantity: order_item.quantity,
        product_id: order_item.product_id,
        size: order_item.size,
    }, {
        where: {id: id}
    });
}

async function deleteOrderItem(id){
    await Order_item.destroy({
        where: {id: id}
    })
}
module.exports = {getOrderItems, createOrderItem, getOrderItem, updateOrderItem, deleteOrderItem}