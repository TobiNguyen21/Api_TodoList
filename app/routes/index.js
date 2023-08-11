const express = require('express');
const router = express.Router();

router.use('/items', require('./items'));
router.use('/careers', require('./careers'));

module.exports = router;
