const Customer = require('../models/customer');

async function getCustomers() {
    return await Product.findAll();
}

async function createCustomer(customer) {
    await Customer.create(customer);
}

async function getCustomer(id) {
    return await Customer.findByPk(id);
}

async function updateCustomer(customer, id) {
    console.log(customer)
    await Customer.update({
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        pWord: customer.pWord,
    }, {
        where: { id: id }
    });
}

async function deleteCustomer(id) {
    await Customer.destroy({
        where: { id: id }
    })
}
module.exports = { getCustomers, createCustomer, getCustomer, updateCustomer, deleteCustomer }