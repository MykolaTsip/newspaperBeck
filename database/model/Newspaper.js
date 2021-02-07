const {Model, DataTypes} = require('sequelize')

const {sequelize} = require('../index')

class Newspaper extends Model{
}

Newspaper.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {sequelize})

const User = require('./User')

Newspaper.belongsTo(User, {foreignKey: 'user_id'})

module.exports = Newspaper
