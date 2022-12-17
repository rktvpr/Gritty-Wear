const router = require('express').Router();
const productRoute = require("./product-routes")
router.use("/products", productRoute)
module.exports = router
