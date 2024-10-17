const express = require('express');
const router = express.Router();
const { userLogin } = require('../controllers/userControllers');

router.route('/login').post(userLogin);

module.exports = router;
