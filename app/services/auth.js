const MainModel = require('../models/users');

module.exports = {
    create: async (item) => {
        const user = await new MainModel(item).save();
        return await user.getSignedJwtToken();
    }
}