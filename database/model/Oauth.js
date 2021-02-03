const {Model, DataTypes} = require('sequelize')

const {sequelize} = require('../index')

class Oauth extends Model{
}

Oauth.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE'
    }
}, {sequelize})

const User = require('./User')

Oauth.belongsTo(User, {foreignKey: 'user_id'
    // , onUpdate: 'SET NULL'
})

module.exports = Oauth
