const MainModel = require('../models/users');
const ErrorResponse = require('../utils/ErrorResponse');

module.exports = {
    create: async (item) => {
        const user = await new MainModel(item).save();
        return await user.getSignedJwtToken();
    },
    login: async (email, password) => {
        const result = await MainModel.findByCredentials(email, password);
        if (result.err) {
            return new ErrorResponse(401, result.err);
        }
        return await result.user.getSignedJwtToken();
    }
}