const {Model, DataTypes} = require('sequelize');

const {sequelize} = require('../index');

class User extends Model {
}

User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            onDelete: 'CASCADE'
        },

        login: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {sequelize});
//
// const Drop = require('./Drop');
//
// User.belongsTo(Drop, { foreignKey: 'the_best_drop', as: modelAllies.theBestDrop });

module.exports = User;
