const express = require('express');
const { getShop, getSingleShop } = require('../controllers/shopController');
const router = express.Router();

router.route('/shops').get(getShop);
router.route('/shop/:id').get(getSingleShop);
module.exports = router;
