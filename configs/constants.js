const dotenv = require('dotenv')

dotenv.config({})

module.exports = {
    EMAIL_NAME: process.env.ROOT_EMAIL ,
    EMAIL_PASS: process.env.ROOT_EMAIL_PASSWORD,

    TYPE_ACCOUNT_SUPERADMIN: process.env.TYPE_ACCOUNT_ADMIN,

    TOKINAZER_TYPE_LOGIN: 'login',
    TOKINAZER_TYPE_ACTIVATE: 'activate',

    AUTHORIZATION  : 'Authorization',
}
