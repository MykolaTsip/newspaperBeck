const {statues} = require("../configs");

const {deleteTokenByParams} = require('../services/oauth.service')


module.exports = {
    DeleteTokens: async (req, res) => {

        await deleteTokenByParams(req.body);

        res.json(statues.OK)
    }
}
