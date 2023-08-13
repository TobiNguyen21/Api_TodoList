const systemConfig = require('../configs/system');

const saveTokenToCookie = (res, statusCode, token) => {
    const options = {
        exprires: new Date(Date.now() + systemConfig.JWT_EXP * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options)
        .json({
            success: true,
            token
        })
}

module.exports = saveTokenToCookie;