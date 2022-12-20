const  CustomerOrder  = require('../models/customer-order');

async function getCustomerOrders(){
    return await CustomerOrder.findAll();
}

async function createCustomerOrder(customerOrder){
    await CustomerOrder.create(customerOrder);
}

async function getCustomerOrder(id){
    return await CustomerOrder.findByPk(id);
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