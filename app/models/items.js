const mongoose = require('mongoose');
const databaseConfig = require('../configs/database');

const schema = new mongoose.Schema({
    name: String,
    status: String
});

module.exports = mongoose.model(databaseConfig.col_items, schema);