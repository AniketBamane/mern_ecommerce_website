const express = require('express')
const controller = require("../controller/orderController")
const authMiddleware = require("../middleware/authMiddleware")
const router =  express.Router()

router.route("/allOrders").get(authMiddleware, controller.getAllOrders)

router.route("/createOrder").get(authMiddleware, controller.createOrder)

router.route("/deleteOrder/:id").delete(authMiddleware, controller.deleteOrder)


module.exports=router