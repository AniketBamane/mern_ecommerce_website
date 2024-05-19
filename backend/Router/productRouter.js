const express = require('express');
const router = express.Router();
const controller = require("../controller/productController")

router.route("/allProducts").get(controller.getAllProducts)

router.route("/oneProduct/:id").get(controller.getAProduct)

module.exports = router
