const express = require('express');
const router = express.Router();
const asyncHandler = require('../middleware/async')

const main_Controller = require(`../controllers/auth_Controller`);
const main_Validate = require('../validates/auth');

router.post('/register', main_Validate.validatorForRegister(), asyncHandler(main_Controller.register_Controller));

router.post('/login', main_Validate.validatorForLogin(), asyncHandler(main_Controller.login_Controller));

module.exports = router;
