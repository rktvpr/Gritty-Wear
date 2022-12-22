const router = require('express').Router();
const { getCustomers, createCustomer, getCustomer, updateCustomer, deleteCustomer } = require("../../repository/customerRepository")


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
    await deleteCustomer(req.params.id);
    res.status(204).send();

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;