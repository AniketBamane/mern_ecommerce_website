const express = require('express');
const router = express.Router();
const controller = require("../controller/productController")

router.route("/allProducts").get(controller.getAllProducts)

router.route("/oneProduct/:id").get(controller.getAProduct)

router.route("/men").get(controller.getMenProducts)

router.route("/women").get(controller.getWomenProducts)

router.route("/kids").get(controller.getKidsProducts)

router.route("/getPopularProducts").get(controller.getPopularProducts)

module.exports = router
