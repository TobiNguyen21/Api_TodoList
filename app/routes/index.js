const express = require('express');
const router = express.Router();

const middle_verifyToken = require('../middleware/verifyToken');
const middle_authorize = require('../middleware/authorize');

router.use('/items', require('./items'));
router.use('/careers', require('./careers'));
router.use('/users', middle_verifyToken, middle_authorize('admin'), require('./users'));
router.use('/auth', require('./auth'));

module.exports = router;
