const router = require('express').Router();
const { getCustomerOrder, createCustomerOrder, getCustomerOrders, updateCustomerOrder, deleteCustomerOrder } = require("../../repository/customerOrderRepository")

// The `/api/products` endpoint
router.get('/:customerId/orders', async (req, res) => {
  try {
    console.log(req.params)
    const customerOrdersData = await getCustomerOrders(req.params.customerId);
    res.status(200).json(customerOrdersData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:customerId/orders/:orderId', async (req, res) => {
  try {
    const customerOrderById = await getCustomerOrder(req.params.customerId, req.params.orderId);
    if (!customerOrderById) {
      res.status(404).json({ message: 'No customer order found with that id!' });
      return;
    }
    res.status(200).json(customerOrderById);

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/:customerId/orders', async (req, res) => {
  try {
    await createCustomerOrder(req.body);
    res.status(201).send();
  } catch(err) {
    res.status(500).json(err);
  }

});


router.put('/:customerId/orders/:orderId', async (req, res) => {
  try {
    const existingOrder = await getCustomerOrder(req.params.id, req.params.orderId);
    if (!existingOrder) {
      res.status(404).json({ message: 'No customer order found with that id!' });
      return;
    }
    await updateCustomerOrder(req.body, req.params.id);
    res.status(204).send();
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:customerId/orders/:orderId', async (req, res) => {
  try {
    const delCustomerOrder = await getCustomerOrder(req.params.id);
    if (!delCustomerOrder) {
      res.status(404).json({ message: 'No customer order found with this id!' });
      return;
    }
    await deleteCustomerOrder(req.params.id);
    res.status(204).send();

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;