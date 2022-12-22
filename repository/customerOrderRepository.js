const  CustomerOrder  = require('../models/customer-order');

async function getCustomerOrders(customerId){
    return await CustomerOrder.findAll({
        where: {customer_id: customerId}
    });
}

async function createCustomerOrder(customerOrder){
    await CustomerOrder.create(customerOrder);
}

async function getCustomerOrder(customerId, orderId){
    return await CustomerOrder.findAll({
        where: {
            customer_id: customerId,
            id: orderId
        }
    });
}

async function updateCustomerOrder(customerOrder, id){
    console.log(customerOrder)
    await CustomerOrder.update({
        customer_id: customerOrder.customer_id,
        purchase_date: customerOrder.purchase_date,
        o_status: customerOrder.o_status,
    }, {
        where: {id: id}
    });
}

async function deleteCustomerOrder(id){
    await CustomerOrder.destroy({
        where: {id: id}
    })
}
module.exports = {getCustomerOrders, createCustomerOrder, getCustomerOrder, updateCustomerOrder, deleteCustomerOrder}