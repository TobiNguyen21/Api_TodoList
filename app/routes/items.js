const express = require('express');
const router = express.Router();
const asyncHandler = require('../middleware/async')

const main_Controller = require(`../controllers/items_Controller`);
const main_Validate = require('../validates/items');

const middle_verifyToken = require('../middleware/verifyToken');
const middle_authorize = require('../middleware/authorize');

router.get('/', middle_verifyToken, asyncHandler(main_Controller.getListItems));

router.get('/:id', asyncHandler(main_Controller.getItemById));

router.post('/add', middle_verifyToken, middle_authorize('admin'), main_Validate.validator(), asyncHandler(main_Controller.addItem));

router.put('/edit/:id', middle_verifyToken, middle_authorize('admin'), main_Validate.validator(), asyncHandler(main_Controller.editItem));

router.delete('/delete/:id', middle_verifyToken, middle_authorize('admin'), asyncHandler(main_Controller.deleteItem));

module.exports = router;
