const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")
const controller = require("../controller/wishlistController")
router.route("/addProducts").post(authMiddleware,controller.addProduct)

router.route("/deleteProduct/:id").delete(authMiddleware,controller.deleteProduct)

router.route("/getWishlist").get(authMiddleware,controller.getWishlist)

module.exports = router
