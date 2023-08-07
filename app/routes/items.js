const express = require('express');
const router = express.Router();
const asyncHandler = require('../middleware/async')

const main_Controller = require('../controllers/items_Controller');

router.get('/', asyncHandler(main_Controller.getListItems));

router.get('/:id', asyncHandler(main_Controller.getItemById));

router.post('/add', asyncHandler(main_Controller.addItem));

router.put('/edit/:id', asyncHandler(main_Controller.editItem));

router.delete('/delete/:id', asyncHandler(main_Controller.deleteItem));

module.exports = router;
