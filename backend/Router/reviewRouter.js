const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")
const controller = require("../controller/reviewController")

router.route("/createReview/:id").post(authMiddleware,controller.createReview)

router.route("/deleteReview/:id").delete(authMiddleware,controller.deleteReview)

router.route("/getAllReviews/:id").get(controller.getAllReviews)

module.exports = router
