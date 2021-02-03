const dotenv = require('dotenv')
dotenv.config({})

module.exports = {
    DB_NAME: process.env.DB_NAME || 'search',

    DB_USERNAME: process.env.DB_USERNAME || 'user',
    DB_USERNAME_PASSWORD: process.env.DB_USERNAME_PASS || 'root',


    db_user: 'user',
    db_oauth: 'oauth',
}
