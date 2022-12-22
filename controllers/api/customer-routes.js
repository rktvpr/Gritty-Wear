const router = require('express').Router();
const { getCustomers, createCustomer, getCustomer, updateCustomer, deleteCustomer } = require("../../repository/customerRepository")
const { getCustomerOrders, deleteCustomerOrder } = require("../../repository/customerOrderRepository")
const { deleteOrderItemByCustomerOrder } = require("../../repository/orderItemRepository")

router.get('/', async (req, res) => {
  try {
    const customerData = await getCustomers();
    res.status(200).json(customerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const customerById = await getCustomer(req.params.id);
    if (!customerById) {
      res.status(404).json({ message: 'No customer found with that id!' });
      return;
    }
    res.status(200).json(customerById);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    await createCustomer(req.body);
    res.status(201);
  } catch(err) {
    res.status(500).json(err);
  }

});


router.put('/:id', async (req, res) => {
  try {
    const existingCustomer = await getCustomer(req.params.id);
    if (!existingCustomer) {
      res.status(404).json({ message: 'No Customer found with that id!' });
      return;
    }
    await updateCustomer(req.body, req.params.id);
    res.status(204).send();
    console.log("customerRoutes")
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const delCustomer = await getCustomer(req.params.id);
    if (!delCustomer) {
      res.status(404).json({ message: 'No customer found with this id!' });
      return;
    }
    let orders = await getCustomerOrders(req.params.id);
    orders = orders.map(order => order.get({plain: true})); 
    
    const orderProcess = (orders) => {
      // another section to take in input... and create a dynamic promise
    
      return new Promise( (resolve, reject) =>  {
      
          orders.forEach(async (order, index) => {
            let customerOrderId = order.id;
            await deleteOrderItemByCustomerOrder(customerOrderId);
            await deleteCustomerOrder(customerOrderId);
            if (index == orders.length - 1){
              resolve({});
            }
          })
          // good
          // console.log(results);
          if (orders.length == 0){
            resolve({})
          }
      });
    };
    await orderProcess(orders);
    await deleteCustomer(req.params.id);
    res.status(204).send();

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;