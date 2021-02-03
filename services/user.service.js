// const chalk = require('chalk')

const {UserModel} = require("../database/model");

module.exports = {

    getOneUserByParams: (params) => {
        return UserModel.findOne({
            where: params
        })
    },

    createUser:  (userObj) => {
            return UserModel.create(userObj)
    },


    deleteUser: (params) => {
        return UserModel.destroy({
            where: params
        })
    }
}
