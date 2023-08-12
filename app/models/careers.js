const mongoose = require('mongoose');
const databaseConfig = require('../configs/database');

let schema = new mongoose.Schema({
    name: String,
    title: String,
    like: Number,
    dislike: Number
});

schema.virtual('restaurants', {
    ref: 'Items', //The Model to use
    localField: '_id', //Find in Model, where localField 
    foreignField: 'careers', // is equal to foreignField
});

// Set Object and Json property to true. Default is set to false
schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model(databaseConfig.col_careers, schema);