const router = require('express').Router();
<<<<<<< HEAD
const { Product, Category, Tag, ProductTag } = require('../../models');
=======
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
const { getProducts, createProduct, getProduct, updateProduct, deleteProduct } = require("../../repository/productRepository")

// The `/api/products` endpoint
router.get('/', async (req, res) => {
  try {
    const productData = await getProducts();
    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const prodById = await getProduct(req.params.id);
    if (!prodById) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    res.status(200).json(prodById);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    await createProduct(req.body);
<<<<<<< HEAD
    res.status(201);
=======
    res.status(201).send();
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
  } catch(err) {
    res.status(500).json(err);
  }

});


router.put('/:id', async (req, res) => {
  try {
    const existingProduct = await getProduct(req.params.id);
    if (!existingProduct) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    await updateProduct(req.body, req.params.id);
    res.status(204).send();
    console.log("productRoutes")
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const delProduct = await getProduct(req.params.id);
    if (!delProduct) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    await deleteProduct(req.params.id);
    res.status(204).send();

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;