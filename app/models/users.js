const mongoose = require('mongoose');
const databaseConfig = require('../configs/database');

const bcrypt = require('bcrypt');

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

module.exports = mongoose.model(databaseConfig.col_users, schema);