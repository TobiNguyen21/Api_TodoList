const main_Service = require('../services/auth');

const saveTokenToCookie = require('../utils/saveTokenToCookie');
const validateReq = require('../utils/validateReq');

module.exports = {
    register_Controller: async (req, res, next) => {
        const item = req.body || {};
        const err = validateReq(req, res, next);

        if (!err) {
            const token = await main_Service.create(item);
            if (token) {
                saveTokenToCookie(res, 201, token);
            }
        }
    },
    login_Controller: async (req, res, next) => {
        const { email, password } = req.body;
        const err = validateReq(req, res, next);

        if (!err) {
            const result = await main_Service.login(email, password);
            if (result.statusCode === 401) {
                res.status(401).json({
                    success: true,
                    message: result.message
                })
            } else {
                const token = result;
                saveTokenToCookie(res, 201, token);
            }
        }
    }
}