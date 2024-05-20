const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")
const controller = require("../controller/userController")
router.route("/addProducts").get(authMiddleware,controller.addProduct)

router.route("/deleteProduct/:id").delete(authMiddleware,controller.deleteProduct)

module.exports = router
