const express = require('express');
const router = express.Router();

router.use('/items', require('./items'));
router.use('/careers', require('./careers'));
router.use('/users', require('./users'));

module.exports = router;
