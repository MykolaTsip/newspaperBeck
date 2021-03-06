const { Sequelize } = require('sequelize');

const {
    sequelizeConfig: {
        DB_NAME,
        USER_NAME,
        USER_PASSWORD,
        DIALECT_DB,
        HOST_DB,
    },
} = require('../configs');

module.exports.sequelize = new Sequelize(DB_NAME, USER_NAME, USER_PASSWORD, {
    host: HOST_DB,
    dialect: DIALECT_DB,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
