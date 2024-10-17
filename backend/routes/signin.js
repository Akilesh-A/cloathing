
const express = require('express');
const { userSignin } = require("../controllers/signinController");
const router = express.Router();
router.route("/signin").post(userSignin);
module.exports = router;