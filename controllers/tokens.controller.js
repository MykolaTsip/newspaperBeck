const {statues, CONSTANTS} = require("../configs");

const {deleteTokenByParams} = require('../services/oauth.service')


module.exports = {
    DeleteTokens: async (req, res) => {
        await deleteTokenByParams({access_token: req.get(CONSTANTS.AUTHORIZATION)});

        res.json(statues.OK)
    }
}
