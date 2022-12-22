const router = require('express').Router();
const productRoute = require("./product-routes")
<<<<<<< HEAD
router.use("/products", productRoute)
=======
const customerRoute = require("./customer-routes")
const customerOrderRoute = require("./customer-order-routes")
router.use("/products", productRoute)
router.use("/customers", customerRoute)
router.use("/customers", customerOrderRoute)
>>>>>>> 61d38fc7789f94f68cc76212ddf2d7d2f53f4857
module.exports = router
