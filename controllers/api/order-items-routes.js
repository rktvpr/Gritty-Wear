const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');
const { getOrderItems, getOrderItem,  createOrderItem, updateOrderItem, deleteOrderItem } = require("../../repository/orderItemRepository")

// The `/api/products` endpoint
router.get('/', async (req, res) => {
  try {
    const productData = await getOrderItems();
    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const orderItemById = await getOrderItem(req.params.id);
    if (!orderItemById) {
      res.status(404).json({ message: 'No Order Item found with that id!' });
      return;
    }
    res.status(200).json(orderItemById);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    await createOrderItem(req.body);
    res.status(201);
  } catch(err) {
    res.status(500).json(err);
  }

});


router.put('/:id', async (req, res) => {
  try {
    const existingOrderItem = await getOrderItem(req.params.id);
    if (!existingOrderItem) {
      res.status(404).json({ message: 'No order item found with that id!' });
      return;
    }
    await updateOrderItem(req.body, req.params.id);
    res.status(204).send();
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const delOrderItem = await getOrderItem(req.params.id);
    if (!delOrderItem) {
      res.status(404).json({ message: 'No order item found with this id!' });
      return;
    }
    await deleteOrderItem(req.params.id);
    res.status(204).send();

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;