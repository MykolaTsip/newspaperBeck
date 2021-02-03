// const chalk = require('chalk')

const {OauthModel} = require('../database/model')

module.exports = {
    createToken: (data) => OauthModel.create(data),

    deleteTokenByParams: async (params) => {
        await OauthModel.destroy({
            where: params
        })
    },

    getTokenByParams: (params) => {
        return OauthModel.findOne({
            where: params,
            raw: true
        })
    },


}
