const express = require('express');
const controller = require("../controller/contactController")
const validator = require("../middleware/validatorMiddleware")
const contactValidationSchema = require("../validator/contactValidator")
const authMiddleware = require("../middleware/authMiddleware")
const router =  express.Router()

router.route("/requestContact").post(validator(contactValidationSchema),authMiddleware,controller.requestContact)

module.exports = router