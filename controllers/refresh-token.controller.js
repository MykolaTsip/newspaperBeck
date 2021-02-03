const jwt = require('jsonwebtoken')

const {tokenConf} = require('../configs')
const {tokens} = require('../services')
const {tokinazer} = require('../helpers')
const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../errors')

module.exports = async (req, res) => {
    const {body} = req


    const token = await tokens.getTokenByParams({body})

    if (!token) {
        return new ErrorHandle(
            ErrorEnum.BAD_REQUEST_NO_TOKEN.message,
            ErrorStatusEnum.UNAUTHORIZED,
            ErrorEnum.BAD_REQUEST_NO_TOKEN.customCode
        )
    }

    jwt.verify(body, tokenConf.REFRESH_TOKEN, err => {
        if (err) {
            res.redirect('http://localhost:5002/users/login')
        }
    })

    const newTokens = tokinazer()
    const {user_id} = token

    await tokens.deleteTokenByParams({body})
    await tokens.createToken({newTokens, user_id})

    res.json(newTokens)
}
