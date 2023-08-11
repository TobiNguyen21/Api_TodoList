const mongoose = require('mongoose');
const fs = require('fs');

const databaseConfig = require('./app/configs/database');

const _dirFile_Items = __dirname + '/app/_data/items.json';
const _dirFile_Careers = __dirname + '/app/_data/careers.json';

(async () => {
    try {
        await mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.ripeili.mongodb.net/?retryWrites=true&w=majority`);
        console.log('CONNECTED MONGODB');
    } catch (error) {
        console.log('Error connecting to database');
    }
})();

const Item = require('./app/models/items');
const Career = require('./app/models/careers');

const items = JSON.parse(fs.readFileSync(_dirFile_Items, 'utf-8'));
const careers = JSON.parse(fs.readFileSync(_dirFile_Careers, 'utf-8'));

const importData = async () => {
    try {
        const promises = [
            Item.create(items),
            Career.create(careers)
        ];

        await Promise.all(promises);
        console.log('import data success');

    } catch (error) {
        console.log('import data fail');
        console.log(error);
    }
    process.exit();
}

const deleteData = async () => {
    try {
        const promises = [
            Item.deleteMany({}),
            Career.deleteMany({})
        ];

        await Promise.all(promises);
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




