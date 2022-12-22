const router = require('express').Router();
const productRoute = require("./product-routes")
const customerRoute = require("./customer-routes")
const customerOrderRoute = require("./customer-order-routes")
router.use("/products", productRoute)
router.use("/customers", customerRoute)
router.use("/customers", customerOrderRoute)
module.exports = router
