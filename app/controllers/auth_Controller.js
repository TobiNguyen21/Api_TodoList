const main_Service = require('../services/auth');

const validateReq = require('../utils/validateReq');

module.exports = {
    register_Controller: async (req, res, next) => {
        const item = req.body || {};
        const err = validateReq(req, res, next);

        if (!err) {
            const token = await main_Service.create(item);
            res.status(201).json({
                success: true,
                data: token
            })
        }
    },
}