const express = require('express');
const signinSchema = require("../validator/signinValidator")
const loginSchema = require("../validator/loginValidator")
const authController = require("../controller/authController");
const validator = require("../middleware/validatorMiddleware");
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.route("/signin").post(validator(signinSchema),authController.signin)

router.route("/login").post(validator(loginSchema),authController.login)

router.route("/getUser").get(authMiddleware,authController.getUser)

module.exports = router
