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
}