const mongoose = require('mongoose');
const databaseConfig = require('../configs/database');
const systemConfig = require('../configs/system');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
    username: String,
    email: String,
    role: String,
    password: String
});

// hash password before saving to database
schema.pre('save', function (next) {
    if (!this.isModified("password")) return next();

    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

schema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, systemConfig.JWT_SECRET, { expiresIn: systemConfig.JWT_EXP });
}

module.exports = mongoose.model(databaseConfig.col_users, schema);