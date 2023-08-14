const asyncHandler = require('../middleware/async');
const systemConfig = require('../configs/system');
const notifyConfig = require('../configs/notify');
const ErrorResponse = require('../utils/ErrorResponse');
const jwt = require('jsonwebtoken');

const middle_verifyToken = asyncHandler((req, res, next) => {
    // Get token
    const token = (req.header('authorization')?.startsWith('Bearer')) ? req.header('authorization').split(' ')[1] : '';

    if (!token) next(new ErrorResponse(401, notifyConfig.ERROR_NO_TOKEN));

    try {
        const data_decoded = jwt.verify(token, systemConfig.JWT_SECRET);
        console.log("data: ", data_decoded);
        next();
    } catch (error) {
        next(new ErrorResponse(401, notifyConfig.ERROR_NO_TOKEN));
    }
});

module.exports = middle_verifyToken;