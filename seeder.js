const mongoose = require('mongoose');
const fs = require('fs');

const databaseConfig = require('./app/configs/database');

const _dirFile = __dirname + '/app/_data/items.json';

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.ripeili.mongodb.net/?retryWrites=true&w=majority`);
        console.log('CONNECTED MONGODB');
    } catch (error) {
        console.log('Error connecting to database');
    }
})()

const Item = require('./app/models/items');
const items = JSON.parse(fs.readFileSync(_dirFile, 'utf-8'));

const importData = async () => {
    try {
        await Item.create(items);
        console.log('import data success');
    } catch (error) {
        console.log('import data fail');
        console.log(error);
    }
    process.exit();
}

const deleteData = async () => {
    try {
        await Item.deleteMany({});
        console.log('delete data success');
    } catch (error) {
        console.log('delete data fail');
        console.log(error);
    }
    process.exit();
}

switch (process.argv[2]) {
    case '-i':
        importData();
        break;
    case '-d':
        deleteData();
        break;
    default:
        break;
}




