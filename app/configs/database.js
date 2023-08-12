require('dotenv').config();

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'api_project',
    col_items: 'Items',
    col_careers: 'Careers',
    col_users: 'Users'
};